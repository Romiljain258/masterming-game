import React from 'react';
import {Card} from "react-bootstrap";
import HeaderBtn from "../buttons/HeaderBtn";
import MainComp from "../buttons/MainComp";
import ChangeColor from "../buttons/ChangeColor";
//import CompareBtn from "../buttons/CompareBtn";


class MainCard extends React.Component{
    constructor(){
        super();
        this.state={
            count:10,
            BtnIndexNo:0, 
            bbColor1:"", bbColor2:"", bbColor3:"", bbColor4:"",
            smColor1:"", smColor2:"", smColor3:"", smColor4:"",
            arr:[],
        };
    };
    BtnIndex=(e)=>{
        // console.log(e,"which btn you have selected");
        this.setState({
            BtnIndexNo:e,
        });
    };
    perticular=(e)=>{
        console.log(e);
        // console.log(this.state.BtnIndexNo," btnindexnijded");
           if(this.state.BtnIndexNo===1){
            this.setState({
                bbColor1:e,
            })
           }
           if(this.state.BtnIndexNo===2){
            this.setState({
                bbColor2:e,
            })
           }
         if(this.state.BtnIndexNo===3){
            this.setState({
                bbColor3:e,
            })
           }
         if((this.state.BtnIndexNo===4)){
            this.setState({
                bbColor4:e,
            })
           };
        };

        compareColor=()=>{
            let a=this.state.arr;
            let ref1=this.state;

            this.setState({
              smColor1:"",
              smColor2:"",
              smColor3:"",
              smColor4:"",
            });

          //WHY USE FLAG ?
          //if color comes twice time in random array, so there they will do white again
          // & again, so for this unqicly defined white & red colors.

          var flag1=0, flag2=0, flag3=0, flag4=0;
          for(let j=0;j<4;j++){
            var col=a[j];

            if (JSON.stringify(col)==JSON.stringify(ref1.bbColor1) && j==0 && flag1==0){
                this.setState({smColor1:'red'});
                flag1=1;
            }
            else if(JSON.stringify(col) == JSON.stringify(ref1.bbColor1) && flag1==0)
                this.setState({smColor1:"white"});
        
            if (JSON.stringify(col) == JSON.stringify(ref1.bbColor2) && j==1 && flag2==0){
                this.setState({smColor2:"red"});
                flag2=1;
            }            
                 else if(JSON.stringify(col) == JSON.stringify(ref1.bbColor2) && flag2==0)
                this.setState({smColor2:"white"});
        
            if (JSON.stringify(col) == JSON.stringify(ref1.bbColor3) && j==2 && flag3==0){
                this.setState({smColor3:"red"});
                flag3=1;  
            }          
                else if(JSON.stringify(col) == JSON.stringify(ref1.bbColor3) && flag3==0)
                this.setState({smColor3:"white"});
        
            if (JSON.stringify(col) == JSON.stringify(ref1.bbColor4) && j==3 && flag4==0){
                this.setState({smColor4:"red"});
                flag4=1;     
            }       
                 else if(JSON.stringify(col) == JSON.stringify(ref1.bbColor4) && flag4==0)
                 this.setState({smColor4:"white"});
          }
        //    {(ref1.smColor1=='red' && ref1.smColor2=='red' && ref1.smColor3=='red' && ref1.smColor4=='red')?
        //       console.log("congratulation"):
        //       ref1.count==0?
        //       console.log("you loose"):
        //       null;
        //    }
              {this.IncCount()}

        };
        
        IncCount=()=>{
            var c=this.state.count-1;
            //console.log(c," 1 receive");
            this.setState({
                count:c,
            });
        };
        randomArray=()=>{
            console.log("yes coming");
            let a=[];      
                let myColors=['#1529e4','#ff0000','#f54712','#6528e7','#ad26c5','#1590ce'];
                for(let k=0;k<4;k++){
                    a.push(
                    myColors[Math.floor(Math.random() * 6)]
                    );
                };
                this.setState({
                    count:9,
                    arr:a,
                    bbColor1:"", bbColor2:"", bbColor3:"", bbColor4:"",
                    smColor1:"", smColor2:"", smColor3:"", smColor4:"",
                });          
        };
        randomA=()=>{
               console.log("hello");
        }

render(){
 console.log(this.state.arr,"   ",this.state.count,"whole state");
    return( <div className="background">
   
        <h1 className="head">MasterMind Game</h1>
        <div id="box" >
  
        <Card className="Card">
        <Card.Header className="Card-header">
            Coder
        </Card.Header>
        
        <Card.Body>
            <Card.Text className="Card-text"> 
                 <HeaderBtn/>
            </Card.Text> 
            <p style={{border: "1.2px solid blue"}} />

            <Card.Text>
                 <MainComp 
                 color={this.state} 
                 BtnIndex={this.BtnIndex}/>
            </Card.Text>           
            <p style={{border: "1.3px solid blue"}} />

        </Card.Body>

        <ChangeColor perticular={this.perticular}/>
        <Card.Footer className="Card-footer">
            Breaker
        </Card.Footer>
        </Card></div>

        <button className="start" onClick={()=>{
            this.randomArray()}}>start
        </button>
        {/* <button  className="check"> <CompareBtn randomA={this.randomA}/>
        </button> */}
        <button className="check" onClick={this.compareColor}>
            check
        </button>
        </div>
    );
};
};

export default MainCard;