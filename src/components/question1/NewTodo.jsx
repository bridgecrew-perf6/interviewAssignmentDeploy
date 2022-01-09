import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap"

const NewTodo=({addEvent})=>{
    const [todo,setTodo]=useState('');

    const newTodoHandler=(e)=>{
        e.preventDefault();
        if(!todo.trim()){
            return;
        }
        let now= new Date();
        now =now.toString()
        const obj={title:todo ,date:now};
        setTodo('');
        addEvent(obj);
    }
    const disable=!todo.trim()?true:'';
    return <Container>
        <Row>
            <Col sm={12} md={4} className='mx-auto' >
                <form onSubmit={newTodoHandler}>
                <div >Add New Task</div>
                    <Form.Control type="text" id="todo" value={todo} placeholder="Enter Task" onChange={(e)=>setTodo(e.target.value)} autoComplete="off" />
                    <Button type='submit'  className='btn-dark btm-block mt-2' style={{width:'100%'}} disabled={disable} >Add</Button>    
                </form>
            </Col>
        </Row>
        
    </Container>
}
export default NewTodo;