import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './container/Home'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Footer/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
