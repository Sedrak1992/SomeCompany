import imgFooter from "../img/fusvg.svg";
import javascript_illustration from "../img/javascript_illustration 1.png";
import "../css/footer.css";
function Footer (){
    return (
        <div className="FooterImg">
            <img src={imgFooter}/>
            <img className="javascript" src={javascript_illustration} className="javascript"/>
        </div>
    )
}

export default Footer;