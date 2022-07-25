import Header from "./company/Header/Header.jsx";
import Frame from "./company/Frame/Frame.jsx";
import BoxContainer from "./boxContainer/BoxContainer.jsx";
import Footer from "./Footer/Footer.jsx";
import "./css/App.css";
import "./css/mediacss/mediaMobaile.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Frame />
      <BoxContainer />
      <Footer/>
    </div>
  );
}

export default App;
