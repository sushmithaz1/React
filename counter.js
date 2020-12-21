import React,{ Component } from "react"
export default class Counter extends Component{

    constructor(props){
        super(props)

        this.inc=this.inc.bind(this)

        this.state={
        count:0
        }
    }

    componentDidMount(){
        console.log('component is ready')
    }
    componentDidUpdate(){
        console.log('component updated')
    }

    inc(){
        this.setState((prevState) =>{
                return{
                    count:prevState.count+1
                }
        })
        console.log(this.state)
    }
    dec(){
        alert('decrementing')
    }
    reset(){
        alert('reset')
    }
    render(){
        return(
    <div>
        Counter:{this.state.count}
        <button onClick={this.inc}>inc</button>
        <button onClick={this.dec}>dec</button>
        <button onClick={this.reset}>reset</button>
       
    </div>
       )
    }
}