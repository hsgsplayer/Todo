import React, { useEffect, useState } from "react";
import Create from './Create'
import axios from "axios";

function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h2>Todo Lists</h2>
            <Create />
            {
                todos.length === 0 
                ? 
                <div><h2>No Record</h2></div>
                :
                todos.map(todo => (
                    <div className="task">
                        <div className="checkbox">
                            <BsCircleFill className='icon'></BsCircleFill>
                        {todo.task} 
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home