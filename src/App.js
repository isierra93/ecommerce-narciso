import Footer from "./assets/Footer";
import Header from "./assets/Header";
import burga from "./assets/images/burga.png"

function App() {
  let titulo = `Bienvenido a Wendys!`
  let description = `Dos carnes a la parrilla, pan, queso cheddar, cebolla, mostaza y ketchup.`;


  return (
    <div className="container" >
      <Header />
      <div className="row">
        <h1 className="text-center">{titulo}</h1>
      </div>
      <div className="row">
        <img className="col-6" src={burga} alt="asd" />
        <p className="col-6">{description}</p>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
