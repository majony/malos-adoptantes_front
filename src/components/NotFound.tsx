function NotFound() {
  return (
    <>
      <div id="content" style={{ paddingTop: "5%" }}>
        <div className="container-fluid">
          {/* <!-- 404 Error Text --> */}
          <div className="text-center">
            <div className="error mx-auto" data-text="404">
              404
            </div>
            <p className="lead text-gray-800 mb-5">Página no encontrada.</p>
            <p className="text-gray-500 mb-0">
              La página ingresada no existe...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
