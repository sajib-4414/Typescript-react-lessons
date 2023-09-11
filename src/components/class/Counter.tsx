import { Component } from "react";
type CounterProps = {
    message: string
}
type CounterState = {
    count: number
}
//count value is 5
//if you dont have prop, then just keep the state
//if you dont have state, keep the prop only
export class Counter extends Component<CounterProps, CounterState>{
    state = {
        count:0
    }
    handleClick = ()=>{
        //() using means immediately return whatever is inside the (). here we have a state{count:} inside()
        //so this is what is returned by the method
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}