import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Spinn } from './spinn';
import Toast from './toast';

function Cardd(props) {
  const {source,key,title,description,price}=props;
  return (
    <Card style={{ width: '18rem',border:'2px solid' }}>
      <Card.Img variant="top" src={source} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Spinn/>
        <Card.Text>
         {description}
        </Card.Text>
       <Toast/>
        <Button variant="primary">{price}</Button>
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