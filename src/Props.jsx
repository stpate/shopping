
import React from "react";
import ReactDOM from "react-dom"

function MissedGoal () {
return <h1> You donkey head you don't know to play you MISSED!</h1>;
}
function MadeGoal () {
    return <h1> WOW its a GOAL! We will gift you an iphone 14 pro max</h1>;
}
function Goal (props){
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal/>;
    }
    else{
        return <MissedGoal/>;
    }
    }

ReactDOM.render(
  
  
    <Goal isGoal={true}/>,
    document.getElementById("root"));
