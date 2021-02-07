import Jumbotron from 'react-bootstrap/Jumbotron'
import React,{useState,useEffect, useImperativeHandle} from 'react'; 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
function Certiform(){
    // useEffect(() => {
    //     handleSubmit();
    // },[]);
    // 
    // const [item,setItem] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value
        const project = event.target.elements.project.value
        console.log(name,project)

        axios.post('http://localhost:8000/api/v1/certificates/',{
            name: name,
            project: project,
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
         ;
    }
    // console.log(item)
    return(
        <Form onSubmit = {handleSubmit}>
<Form.Group  controlId="exampleForm.ControlInput1">
  <Form.Label>Name</Form.Label>
  <Form.Control name = "name" type="text" placeholder="Enter name" />
 
</Form.Group>

<Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Project</Form.Label>
  <Form.Control name = "project" type="text" placeholder="Project Name" />
</Form.Group>

<Button variant="primary" htmlType= "submit" type="submit">
  Submit
</Button>
</Form>
    )
}

export default Certiform;