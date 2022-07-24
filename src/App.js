import Header from "./company/Header/Header.jsx";
import Frame from "./company/Frame/Frame.jsx";
import BoxContainer from "./boxContainer/BoxContainer.jsx"
import Footer from "./Footer/Footer.jsx"
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <Frame />
      <BoxContainer/>
      <Footer/>
      
    </div>
  );
}

export default App;
