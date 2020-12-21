import React,{ Component } from "react"
export default class Action extends Component{
    callme(){
        alert('welcome')
    }
    render(){
        return(
    <div>
    
         <button className="btn btn-primary" disabled={!this.props.hasOption} onClick={this.callme}>calll me</button>
       
    </div>
       )
    }
}