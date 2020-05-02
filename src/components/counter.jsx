import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (

      <div>
        <div className="row">
          <div className="col-md-3">
            <span style={{ align:'right', fontSize: 24 }} className={this.getBadgeClasses1()}>
              {this.formatCount1()}
            </span>
            <button
              className="btn btn-secondary"
              onClick={() => this.props.onIncrement(this.props.counter1)}
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
            <span style={{ fontSize: 24 }} className={this.getBadgeClasses2()}>
              {this.formatCount2()}
            </span>
          </div>
          <div className="col-md-4">

	</div>
    
        </div>
		  <hr>
		  </hr>
		<div className="row">
          <div className="col-md-3">  
			<input size="3" style={{ fontSize: 24 }} className="warning" type="text" value={this.props.intento.value}  onkeypress={this.myKeyPress} onChange={this.moveCaretAtEnd}/>
		  	</div>
			

			<i class="fa fa-camera-retro fa-5x"></i> 

        </div>

      </div>

    );
  }

  getBadgeClasses1 = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter1.value1 === 0 ? "warning" : "primary";
	classes +="warning";
    return classes;
  };
  getBadgeClasses2 = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter1.value2 === 0 ? "warning" : "primary";
    classes +="warning";
	return classes;
  };

  formatCount1 = () => {
	var size = 5;
    const { value1 } = this.props.counter1;
    var s = String(value1);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
  }; 
  
	formatCount2 = () => {
		var size = 5;
	const { value2 } = this.props.counter2;
    var s = String(value2);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
	};

	formatResultado = () => {
		var size = 5;
	const { resultado } = this.props.resultado;
    var s = String(resultado);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
	};

changeCounter1 = (event) => {
    const updatedKeyword = event.target.value;
    // May be call for search result
}
changeCounter2 = (event) => {
    const updatedKeyword = event.target.value;
    // May be call for search result
}

setResultado = (event) => {
    this.resultado= event.target.value;
    // May be call for search result

}
handleSubmit=()=>{
	alert("prueba");
}
   myKeyPress(e){
    var keynum;
alert("key");
    if(window.event) { // IE                    
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                   
      keynum = e.which;
    }

    alert(String.fromCharCode(keynum));
  }
onkeypress (evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    alert(charStr);
};

   moveCaretAtEnd(e) {
	   alert(e.keyCode);
        var temp_value = e.target.value
        e.target.value = ''
        e.target.value = temp_value
		var myStr =  temp_value;
        var newStr = myStr.replace(/(.*)(.)$/, "$2$1");
e.target.value=newStr;
    }

}
export default Counter;
