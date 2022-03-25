import React from "react";
import { Link } from "react-router-dom";
import "./AceptedMatch.css";
import Card from "../../../../components/Cards/Card";
import ProfileNavbar from "../../../../components/ProfileNavbar/ProfileNavbar";
import Footer2 from "../../../../components/FotterLogueado/Footer2"

const AceptedMatch = (props) => {
  return (
    <>
      {" "}
      <ProfileNavbar />
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card">
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ background: "#000", height: "200px" }}
                >
                  <div className="ms-4 mt-5 d-flex flex-column" style={{ width: "150px" }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: "150px" }}
                    />
                    <Link
                      to="/miperfil/editdata/"
                      type="button"
                      className="btn btn-outline-dark editperfil"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: "1" }}>
                      Editar perfil
                    </Link>
                  </div>
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist"></ul>
                  <div className="historybootom">
                    <div className="ms-4 mt-10 d-flex flex-column" style={{ width: "150px" }}>
                      <Link
                        to="/userprofile/"
                        type="button"
                        className="btn btn-outline-dark mislibros"
                        data-mdb-ripple-color="dark"
                        style={{ zIndex: "1" }}>
                        Mis Libros
                      </Link>
                    </div>
                  </div>
                  <div className="historybootom">
                    <div className="ms-4 mt-1 d-flex flex-column" style={{ width: "150px" }}>
                      <Link
                        to="/userprofile/pendingmatch"
                        type="button"
                        className="btn btn-outline-dark matchpendientes"
                        data-mdb-ripple-color="dark"
                        style={{ zIndex: "1" }}>
                        Match Pendientes
                      </Link>
                    </div>
                  </div>
                  <div className="historybootom">
                    <div className="ms-4 mt-1 d-flex flex-column" style={{ width: "150px" }}>
                      <Link
                        to=""
                        type="button"
                        className="btn btn-outline-dark active matchaceptados"
                        data-mdb-ripple-color="dark"
                        style={{ zIndex: "1" }}>
                        Match Aceptados
                      </Link>
                    </div>
                  </div>
                  <div className="ms-3">
                    <h5>{props.name}</h5>
                    <p>{props.city}</p>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                </div>

                <div className="card-body p-4 text-black">
              
                  <h1>Aceptados</h1>
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  );
};

export default AceptedMatch;