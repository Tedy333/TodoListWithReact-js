import React from "react";
import Button from "./Button";
import "../style/FormInput.css"

class Input extends React.Component{
    state ={
        text : ""
    }
    change = e => {
        this.setState({text: e.target.value})
    }

    submit = e => {
        e.preventDefault()
        if(this.state.text !==""){
            this.props.add(this.state.text)
        }
        this.setState({
            text: ""
        })
    }

    render() {
        return(
            <form style={inputForm} onSubmit={this.submit}>
                <input 
                type="text"
                onChange={this.change}
                value={this.state.text}
                style={input}
                placeholder="add task"
                />
                <Button text="add" variant="primary" action={this.submit}/>
            </form>

        )
    }
}

export default Input

const inputForm = {
    background : "#fff",
    color : "#fff",
    display : "flex",
    alignItems : "center",
    height : "3rem",
    padding : "0 1rem",
    justifyContent: "space-between",
    margin : "0.5rem 0"
}

const input = {
    width : "70%",
    border : "none"
}