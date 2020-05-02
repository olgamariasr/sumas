import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
	
 RandomNumber =  () => { return Math.floor(Math.random() * 100) + 1 };


  state = {

    counters: [
      //{ id: 1, value1: 1, value2:1  ,resultado:2 },

    ]
  };


AddItemsToArray=()=>{
	  var counters=[]
      //Adding Items To Array.
      var valor1 = this.RandomNumber();
      var valor2 = this.RandomNumber();
	  counters.push( {id: 1, value1: valor1, value2:valor2  ,resultado:valor1+valor2} );
	console.log(counters[0]);
	return(counters);
  }



  handleIncrement = (counter) => {
	  
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
	counters[index].resultado =  counters[index].value1+ counters[index].value2;
	alert(counters[index].intento);
	console.log(counters[index].resultado );
    this.setState({ counters });
	
  };


  handleReset = () => {
	  const counters =this.AddItemsToArray();
    /*const counters = this.state.counters.map(c => {
      c.value1 = 0;
      c.value2 = 0;
      c.resultado = 0;
      return c;
    });
	*/
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleRestart = () => {
  //window.location.reload();
  	  const counters =this.AddItemsToArray();
    this.setState({ counters });

  

  };

  render() {
    return (
      <div>
        <NavBar
          totalCounters={this.state.counters.filter(c => (c.value1 > 0 || c.value2>0)).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onRestart={this.handleRestart}
          />
        </main>
      </div>
    );
  }
}

export default App;
