import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Spinn } from './spinn';
import Toast from './toast';
import { createTodo } from "../jsHelpers/data"

function Cardd(props) {
  const {id,text,onClick,checker}=props;
  
  return (
    <Card style={{ width: '18rem',border:'2px solid' }}>
      <Card.Img variant="top"/>
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Spinn/>
        <Card.Text>
         {text}
        </Card.Text>
       {/* <Toast/> */}
        <Button variant="primary" onClick={onClick}>delete</Button>
        <Button variant="primary" onClick={checker}>even/odd</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardd;


export const BasicCard =({title,description,value,ind,removeHandler})=>{

  return (
    <Card style={{ width: '18rem',margin:'8px' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" onClick={()=>removeHandler(ind)}>{value}</Button>
      </Card.Body>
    </Card>
  );

}