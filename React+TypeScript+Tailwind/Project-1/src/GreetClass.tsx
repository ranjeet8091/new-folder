// 1) create a class extends React.components
// 2) class method must have a render method which return tsx

import React from "react";

type GreetProps={
    name:string,
}
type GreetStates={
     name:string,
     isLoggedin:boolean
}
class GreetClass extends React.Component<GreetProps,GreetStates>{
    state={isLoggedin:false,name:"Ranjeet"}
    // props comes in props .. as object
    clickHandler1=()=>{
        this.setState({name:"Vivek"});
        this.setState({isLoggedin:true});
    }
    clickHandler=()=>{
        this.setState({name:"Ranjeet"});
        this.setState({isLoggedin:false});
    }
    render() {
        return (
            <>
            {this.state.isLoggedin?"LogIn":"Logout"}
            <div> class {this.state.name}</div>
            <button onClick={this.state.isLoggedin?this.clickHandler:this.clickHandler1} className="border-1 bg-amber-400 p-2.5 m-4">Click Me</button>
            </>
        )
    }
}
export default GreetClass