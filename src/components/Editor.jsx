import React, { useState,useCallback,useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "../App.css"
import {io} from "socket.io-client";
import { useParams } from "react-router-dom";

const ShareLinkstyle={
  position: "sticky",
  bottom: "0",
  backgroundColor: "white",
  padding: "10px",
  borderStyle: "dashed",
  width:"100px",
 
}

const SAVE_INTERNAL_MS=2000;

const customTheme=[

  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['link', 'image'],

  ['clean']    
]

export default function Editor() {
const {id:documentId} = useParams();
  const [socket,setSocket]=useState();
  const [quill,setQuill]=useState();
  const [documentUrl, setDocumentUrl] = useState('');


    useEffect(()=>{
         const s=io("http://localhost:9000");
         
         setSocket(s);
         return()=>{
          s.disconnect();
         }



    },[])

    useEffect(()=>{

      if(socket==null|| quill==null) return

      const handler =(delta)=>{
        console.log('receive wala',delta)

      quill.updateContents(delta)
       
      }
      socket.on('receive-changes',handler)

     return ()=>{
      socket.off('receive-changes',handler)
     }
    },[socket,quill])


    useEffect(()=>{

      if(socket==null|| quill==null) return

      const handler =(delta,oldDelta,source)=>{

        if(source!='user') return;
          
        console.log('yaha aya',delta)
        socket.emit("send-changes",delta)
       
      }
      quill.on('text-change',handler)

     return ()=>{
      quill.off('text-change',handler)
     }
    },[socket,quill])


    
useEffect(()=>{  //1
  if(socket==null || quill==null) return;
  const interval =setInterval(()=>{

    socket.emit('save-document',quill.getContents())
  },SAVE_INTERNAL_MS)

  return ()=>{
    clearInterval(interval)
  }
   
},[socket,quill])


useEffect(()=>{   //2
  if(socket==null || quill==null) return;

  socket.once('load-document',document=>{
     quill.setContents(document)
     quill.enable()
  })

  socket.emit('get-document',documentId);

},[socket,quill,documentId])




 const wrapperRef = useCallback(wrapper=>{
   if(wrapper == null) return;

   wrapper.innerHTML = "";
   const editor = document.createElement("div");
    wrapper.append(editor);
    const q=new Quill(editor, { theme: "snow" ,modules:{
      toolbar:customTheme
    }});
    q.disable();
    q.setText('loading ...')
    setQuill(q);
 },[]);

 useEffect(() => {
  setDocumentUrl(`${window.location.protocol}//${window.location.host}/documents/${documentId}`)
}, [documentId]);

const handleCopyLinkClick = (event) => {
  event.preventDefault();
  navigator.clipboard.writeText(documentUrl)
    .then(() => {
      alert('Copied to clipboard')
    })
    .catch((error) => {
      console.error('Failed to copy link: ', error);
    });
};
 return <>
     <div id="container" ref={wrapperRef}></div>;
     <p style={ShareLinkstyle}>
         <a  onClick={handleCopyLinkClick} style={{color:"blue"}}>copy Link ©️</a>
      </p>
  </>;

}
