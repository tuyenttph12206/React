import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Albums from './components/Albums';
import Footer from './components/Footer';

function App() {
    const myName="Tuyen";
    const myAge=20;
    const sum=(a,b) =>{ 
        return a+b;}
    return (
    <div className = "App" >
         < Header />

     
  
         <main>
             <Banner/>
             <Albums/>
        </main>
             <Footer/>
    </div>

       
    );
}

export default App;