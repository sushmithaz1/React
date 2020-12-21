import React,{ Component } from "react"
export default class AddOption extends Component{

    constructor(props){
        super(props)
        this.callme=this.callme.bind(this)
    }

    callme(e){
        e.preventDefault()

        const data=e.target.elements.uname.value
        const newdata=this.props.hao(data)

        alert(data)
        
    }
    render(){
        return(
    <div>
           <form onSubmit={this.callme}> 
           Name:<input type="text" name="uname"/>
               <button className="btn btn-danger">callme</button>
               </form>
    </div>
       )
    }
}