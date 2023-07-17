import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Price from './Price';
import Name from './Name';
import Description from './Description';
import Image from './Image';

// calling all other files
function cardsComp() {
  return (
    <Card style={{ width: 400 }}>
     <Image/>
      <Card.Body>
        <Card.Title>
            <Name/>
        </Card.Title>
        <Card.Text style={{ fontFamily: 'Arial' }}>
          <Description/>
        </Card.Text>
        <Card.Text>
          <Price/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default cardsComp;