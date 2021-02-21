import Stars from './components/stars/Stars';
import './App.css';

const count = 5;

function App() {
  return (
    <div className="App">
      <Stars count={count} />   
    </div>
  );
}

export default App;
