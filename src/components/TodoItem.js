import React from "react";
import Button from "./Button";
import propTypes from "prop-types"

const TodoItem = ( {todo, del, open} ) => {
    const delById = id => {
        del(id)
    }
    return(
        <div style={todoItem}>
            <p>{todo.title}</p>
        <div>
            <Button text="edit" variant="success" action={() => open(todo.id, todo.title)}/>
            <Button text ="delete" variant="warning" action={() => delById(todo.id)}/>
        </div>
        </div>
    )
}

TodoItem.propTypes={
    todo: propTypes.object.isRequired,
    del: propTypes.func.isRequired
}
export default TodoItem

const todoItem = {
    background : "#2da4f8",
    color : "#fff",
    display : "flex",
    alignItems : "center",
    height : "3rem",
    padding : "0 1rem",
    justifyContent: "space-between",
    margin : "0.5rem 0"
}