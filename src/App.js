import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Maincontent from './components/Maincontent';
import Footer from './components/Footer';
import Store from './components/Store';
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
   <>

  
      <Router>
        <Switch>



          <Route path="/Contact">
           <Contact />
          </Route>

          <Route path="/Store">
            <Store />
          </Route>

          
          <Route path="/">
          <Navbar titleh1="Hacker-Ton The World's Famous Gaming Industry" titleh2=" Check Out Our Awesome"/>
          <Maincontent />     
          <Footer />
          </Route>
        </Switch>

    </Router> 
  


   </>
  );
}




export default App;
