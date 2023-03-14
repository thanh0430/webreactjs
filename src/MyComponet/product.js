import React from 'react';
import '../App.css'
export default function Product() {
    return (
        <div>
            <div>
                <div className="list-child-scroll">           
                    <a className="link-image " title="iPhone" > <img src={require("../Concent/image/logodell.jpg")}/></a> 
                    <a className="link-image " title="Samsung"> <img src={require("../Concent/image/th.jpg")}/></a> 
                    <a className="link-image " title="OPPO"> <img src={require("../Concent/image/HPlogo.jpg")}/></a> 
                    <a className="link-image " title="Xiaomi"> <img src={require("../Concent/image/msilogo.jpg")}/></a> 
                    <a className="link-image " title="Vivo" > <img src={require("../Concent/image/lenovologo.jpg")}/></a> 
                    <a className="link-image " title="Nokia" > <img src={require("../Concent/image/asuslogo.jpg")}/></a>                   
                </div>
            </div>
        </div>
      )
}
