import Container from "./box/Container.jsx";
import "../css/boxFlex.css"
import "../../src/css/mediacss/mediacss.css"


function BoxContainer() {
  return (
    <div className="boxFlex">
      <Container />
      <Container />
      <Container />
    </div>
  );
}

export default BoxContainer;
