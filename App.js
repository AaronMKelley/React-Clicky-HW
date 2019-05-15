import React, { Component } from 'react';
// import logo from './logo.svg';
import amanda from './Amanda_Bynes_Ask_Ashley.png';
import kenan  from  './kenan.png';
import kyle from './kyle.png'
import lori from './Lori.png'
import nick from './nick.png'
import josh from './Josh.png'
import jamie from './jamielynn.png'
import kel from './kel.png'
import danny from './danny.png'
import alisa from './Alisa_all_that.jpg'
import gio from './Gio.jpg'
import pizza from "./Pizzaface.jpg"
import './App.css';
const imgArry=[amanda,kenan,kyle,lori,nick,josh,jamie,kel,danny,alisa,gio,pizza]
// let counter=0;
class App extends Component {
  constructor() {  
    //you must call the Component constructor function using super(), before setting any properties in this class - this is a react standard
    super();
   
  
    
    this.gravity = 9.8;

    //this is a react standard, you must call this.state
    this.state = {
      imgGuess: [],
      counter:0,
      imgArry:[
          amanda,kenan,kyle,lori,nick,josh,jamie,kel,danny,alisa,gio,pizza,
      ]
}

  
  
}


  clickImage = (event) => {
  event.preventDefault();
  let counter=[this.state.counter]
  let imgGuess = [...this.state.imgGuess]
  let imgArry = [...this.state.imgArry]

  if (imgGuess.includes(event.target.src) && counter<11){
    alert("You Lose")
  }else{
  //  console.log(event.target.src.push(imgGuess))
      (event.target.src).push(imgGuess)
  }
}

// const guess = event.target
// let alreadyGuessed = this.state.imgGuess.indexOf(guess)> -1;

  // if (alreadyGuessed){
  // this.setState({
  //   imgArry: this.state.imgArry.sort(function(a,b){
  //     return 0.5- Math.random()
  //   }),
  //   imgGuess:[],
  //   counter: 0 
  // })
  // alert("You Lose, Try Again?")
  // 
  //  } else {
  //   this.setState({
  //     imgArry: this.state.imgArry.sort(function(a,b){
  //       return 0.5 -Math.random();
  //     }),
  //     imgArry: this.state.imgArry.concat(
  //       guess
  //     ),
  //     score: this.state.counter +1
      
  //   })
    
  // }
  
  //  }

  
   
   
  // }

  



 

  //this function must be called render
  render() {
    
    
    //I have to return something
    //this is where your jsx goes
    return (


      <div className="App">
<p>Counter:{this.counter}</p>
        
      
      {imgArry.map((image,ind)=>{
          return <img class="image" src={image} onClick={this.clickImage}></img>
        })}
   



      {/* <div>
        <img class="image" src={amanda} onClick={this.clickImage}></img>
        <img class="image"  src={kenan} onClick={this.clickImage}></img>
        <img class="image"  src={kyle} onClick={this.clickImage}></img>
        <img class="image"  src={lori} onClick={this.clickImage}></img>
        </div>
        <div>
        <img class="image" src={nick} onClick={this.clickImage}></img>
        <img class="image"  src={josh} onClick={this.clickImage}></img>
        <img class="image"  src={jamie} onClick={this.clickImage}></img>
        <img class="image"  src={kel} onClick={this.clickImage}></img>
        </div>
        <div>
        <img class="image" src={danny} onClick={this.clickImage}></img>
        <img class="image"  src={alisa} onClick={this.clickImage}></img>
        <img class="image"  src={gio} onClick={this.clickImage}></img>
        <img class="image"  src={pizza} onClick={this.clickImage}></img>
        </div> */}

       
        

       

        


       

        

        --------

        

        

        

          
        

      </div>
    );
  }
}

export default App;
