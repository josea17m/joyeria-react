function Carousel (){
    return (

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-inner">

              <div className="carousel-item active">
                <img src="./images/2022-07-27_23.20.04.png" className="d-block w-100" alt="..."/>
              </div>

              <div className="carousel-item">
                <img src="./images/2022-02-20_10.43.57.png" className="d-block w-100" alt="..."/>
              </div>

              <div className="carousel-item">
                <img src="./images/2022-02-20_10.43.57_2.png" className="d-block w-100" alt="..."/>
              </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
    );
};

export default Carousel;