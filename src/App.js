import './App.css';
import react,{useState} from 'react';

function App() {
  const [data,setData]=useState(null)
  const [print,setPrint]=useState(false)
 function getData(val){
    console.warn(val.target.value)
    setData(val.target.value)
  }

  return (
    <div className="App">
     <h1>Get Input Box Value :)</h1>
     {
      print?
     <h1>{data}</h1>
     :null
          }
     <input type="text" onChange={getData}></input>
     <button onClick={()=>setPrint(true)}>Print Data</button>
    </div>
  );
}

export default App;
