import './App.css';
import Navbar from './components/Navbar/Navbar';
import Itemlistcontainer from './Itemlistcontainer/Itemlistcontainer';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Itemlistcontainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
