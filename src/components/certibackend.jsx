
import Jumbotron from 'react-bootstrap/Jumbotron'
import React,{useState,useEffect} from 'react'; 
import Certiform from './certiform'
import Button from 'react-bootstrap/Button'
function Certificates() {
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState([]);

    const fetchItem = async () => {
        const fetchItem = await fetch(`http://localhost:8000/api/v1/certificates/`);
        const item = await fetchItem.json();
        setItem(item)
            ;
    }

    return (

        <div class="container">
            <h1> Certificates</h1>
            {item.map(data => (
                <Jumbotron>
                    <h1>Name = {data.name}</h1>
                    <h2>
                        Project = {data.project}
                    </h2>
                </Jumbotron>

            ))}
           <Certiform>
               
           </Certiform>
        </div>




    )
}

export default Certificates;