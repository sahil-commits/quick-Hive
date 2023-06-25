import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import phone from "../components/images/socialmedia-phone.webp";
import { v4 as uuidv4 } from 'uuid';
import { Navigate } from 'react-router-dom';

// function handleNewDocumentClick() {
//   const newDocId = uuidv4();
//   return <Navigate replace to={`/documents/${newDocId}`} />;
// }


export default function Welcome() {
  return (
    <>
      <section id="title" class="gradient-background">
        <div class="container col-xxl-8 px-4 pt-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img
                src={phone}
                class="d-block mx-lg-auto img-fluid rounded-4"
                width="700"
                height="500"
                loading="lazy"
              ></img>
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Quick Hive 📃
                <br></br>
                <br></br>
                Share docs with your friends instantly and write together
              </h1>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-5">

              <Link to={`/documents/${uuidv4()}`}>
                <button
                  type="button"
                  class="btn btn-primary btn-lg px-4 me-md-2 text-black bg-white"
                 
                >
                  Open Docs and Share
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section id="testimonal">
        <div class="p-5 text-center bg-body-tertiary rounded-3">
          <h1 class="text-body-emphasis">Study with friends and Shine</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="200"
            fill="currentColor"
            class="bi bi-mortarboard-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
          </svg>

          <p class="col-lg-8 mx-auto fs-5 text-muted">Made with 💖 by Hive</p>

          <div class="row">
            <div class="col-lg-12 ">
              - Creator <a href="https://github.com/s2ahil">Sahil</a>
            </div>
          </div>
        </div>
      </section>

      <section id="footer" class="gradient-background">
        <div class="container">
          <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5 ">
            <div class="col mb-3">
              <a
                href="/"
                class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
              >
                <svg class="bi me-2" width="40" height="32">
                  <use xlink:href="#bootstrap"></use>
                </svg>
              </a>
              <p class="text-body-secondary">© Hive For Life</p>
            </div>

            <div class="col mb-3"></div>

            <div class="col mb-3">
              <h5>Social Media handles</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a
                    href="https://twitter.com/S2ahil"
                    class="nav-link p-0 text-body-secondary"
                  >
                    Follow on twitter
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
