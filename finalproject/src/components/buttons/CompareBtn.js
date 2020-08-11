import React from "react";

class CompareBtn extends React.Component{
     render(){
        let {randomA}=this.props;
        let ref1=this.props;
        let a=this.props.arr;
        compareColor=()=>{

            // this.setState({
            //   smColor1:"",
            //   smColor2:"",
            //   smColor3:"",
            //   smColor4:"",
            // });

          //WHY USE FLAG ?
          //if color comes twice time in random array, so there they will do white again
          // & again, so for this unqicly defined white & red colors.

          var flag1=0, flag2=0, flag3=0, flag4=0;
          for(let j=0;j<4;j++){
            var col=a[j];

            if (JSON.stringify(col)==JSON.stringify(ref1.bbColor1) && j==0 && flag1==0){
            {this.randomA('red')}
                flag1=1;
            }
            else if(JSON.stringify(col) == JSON.stringify(ref1.bbColor1) && flag1==0)
            {this.randomA('white')}
        
            if (JSON.stringify(col) == JSON.stringify(ref1.bbColor2) && j==1 && flag2==0){
                {this.randomA('red')}
                flag2=1;
            }            
                 else if(JSON.stringify(col) == JSON.stringify(ref1.bbColor2) && flag2==0)
                 {this.randomA('white')}
        
            if (JSON.stringify(col) == JSON.stringify(ref1.bbColor3) && j==2 && flag3==0){
                {this.randomA('red')}
                flag3=1;  
            }          
                else if(JSON.stringify(col) == JSON.stringify(ref1.bbColor3) && flag3==0)
                {this.randomA('white')}
        
            if (JSON.stringify(col) == JSON.stringify(ref1.bbColor4) && j==3 && flag4==0){
                {this.randomA('red')}
                flag4=1;     
            }       
                 else if(JSON.stringify(col) == JSON.stringify(ref1.bbColor4) && flag4==0)
                 {this.randomA('white')}
          }
        //    {(ref1.smColor1=='red' && ref1.smColor2=='red' && ref1.smColor3=='red' && ref1.smColor4=='red')?
        //       console.log("congratulation"):
        //       ref1.count==0?
        //       console.log("you loose"):
        //       null;
        //    }
         

        };
         return(
             <>
                 <button onClick={()=>{
                     {this.onCompreColor()}
                 }}></button>
             </>
         )
     }
}
export default CompareBtn;