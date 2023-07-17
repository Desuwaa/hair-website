import './App.css';
import Cards from './components/Cards';
import Product from './components/Product';

function App() {
  const firstName = prompt('Please enter your name');
  return (
    <div className="message">
     <Cards/>
     <div>
      <p>Hello, {firstName ? firstName: 'Hello Dear'}!</p>
      {firstName && <img className="image" src={Product.image} alt='info'/>}
     </div>
    </div>
  );
}

export default App;
