import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RenderProducts from "./components/RenderProducts";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element= {<Carousel />}/>
      </Routes>
      <Routes>
        <Route path="/anillos" element= {<RenderProducts name="los anillos"/>}/>
      </Routes>
      <Routes>
        <Route path="/candongas" element= {<RenderProducts name="las candongas"/>}/>
      </Routes>
      <Routes>
        <Route path="/cadenas" element= {<RenderProducts name="las cadenas"/>}/>
      </Routes>
      <Routes>
        <Route path="/manillas" element= {<RenderProducts name="las manillas"/>}/>
      </Routes>
      <Routes>
        <Route path="/topitos" element= {<RenderProducts name="los topitos"/>}/>
      </Routes>
      <Routes>
        <Route path="/favoritos" element= {<RenderProducts name="tus favoritos"/>}/>
      </Routes>
      <Routes>
        <Route path="/carrito" element= {<RenderProducts name="tu carrito"/>}/>
      </Routes>
      <Footer />
    </Router>

    // <>
    //   <Header />
    //   <main>
    //     <Carousel />
    //     
    //   </main>
    // </>
  );
}

export default App;
