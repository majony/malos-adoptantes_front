//import imagen1 from "../img/perrito.png";
import imagen2 from "../img/perritaNegra.png";

function Login() {
  return (
    <div className="container">
      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image">
                  {" "}
                  <img
                    style={{ height: "auto", width: "100%" }}
                    src={imagen2}
                  />{" "}
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Bienvenido a la plataforma Malos Adoptantes
                      </h1>
                    </div>
                    <form className="user">
                      <div
                        className="form-group"
                        style={{ paddingBottom: "20px" }}
                      >
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Ingrese su usuario"
                        />
                      </div>
                      <div
                        className="form-group"
                        style={{ paddingBottom: "20px" }}
                      >
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Ingrese su contraseña"
                        />
                      </div>
                      <button
                        style={{ marginTop: "10px", width: "200px" }}
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Ingresar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
