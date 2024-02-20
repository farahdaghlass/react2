
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
function App() {

  const name = " Farah"
  const age = 18;

  return (
    <>
    <div><Navbar />
    <h2> Hello my name is {name}</h2>
    <h3>and my age is {age}</h3>
    <About />
    <Footer />
    </div>
      
    </>

  )
}
export default App;
