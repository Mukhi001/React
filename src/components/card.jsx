import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Spinn } from './spinn';
import Toast from './toast';

function Cardd() {
  return (
    <Card style={{ width: '18rem',border:'2px solid' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Spinn/>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <Toast/>
        <Button variant="primary">Go somewhere</Button>
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