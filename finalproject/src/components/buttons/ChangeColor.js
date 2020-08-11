import React from "react";

class ChangeColor extends React.Component{
    render(){
        let { perticular}=this.props;
     return(
         <>     
        <div className="btn-pos">  
        <button className="btn-color1" onClick={()=>{perticular('#1529e4');}}></button>
        <button className="btn-color2" onClick={()=>{perticular('#ff0000');}} ></button>
        <button className="btn-color3" onClick={()=>{perticular('#f54712');}}></button>
        <button className="btn-color4" onClick={()=>{perticular('#6528e7'); }}></button>
        <button className="btn-color5" onClick={()=>{perticular('#ad26c5');}}></button>
        <button className="btn-color6" onClick={()=>{perticular('#1590ce'); }}></button>
        </div>
         </>
     )
}
}
export default ChangeColor;