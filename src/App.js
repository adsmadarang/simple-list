import { useState } from 'react';
import ListInput from './Components/ListInput';
import ListDisplay from './Components/ListDisplay';
import './App.css';

function App() {

const [input,setInput]= useState('')
const [allList, setAllList] = useState([])

  return (
    <>
      <ListInput 
        input={input}
        setInput = {setInput} 
        allList={allList} 
        setAllList={setAllList} 
      />
  
      <ListDisplay
        input={input} 
        setInput = {setInput} 
        setAllList={setAllList} 
        allList={allList} 
      />
    </>
  );
}

export default App;
