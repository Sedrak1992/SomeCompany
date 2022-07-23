import "../../../src/css/container.css"
import fop from "../../img/dolar.png"

function Container (){
    return(
        <div className="container">
             <div>
                <img src={fop} alt="dolar"/>
                <p>Join us with the lastest blockchain innovations</p>
             </div>

        </div>
    )
}

export default Container;