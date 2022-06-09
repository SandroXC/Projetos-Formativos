import "./Home.css";
import PaletaLista from "components/paletaLista/PaletaLista";
import Navbar from "components/Navbar/Navbar";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}

export default Home;