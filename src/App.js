import logo from './logo.svg';
import './App.css';
import Dishes from './Components/Dishes';
import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>

      <div className="App1">
        <div className ="block"> 
        <AllCategories/>
        <Cart/>
        </div>
        <div className ="block"> 
<Dishes/>

</div>

    </div>
  
   </div>

  );
}

export default App;
