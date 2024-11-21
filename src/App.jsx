import './App.css'
import UseState from './components/UseState';

function App() {
  function handleClick(){
    alert('Button Clicked');
  };

  const handleClick2 = () =>{
    alert('Button Clicked 2');
  };

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <div className='flex flex-col gap-4 w-7/12 mx-auto'> 
      <h2>React Event handling</h2>
      <h2>React Core Concept</h2>
      <button className='btn bg-green-100 w-4/12 mx-auto' onClick={handleClick}>Button 1</button>
      <button  className='btn bg-green-200 w-4/12 mx-auto'onClick={handleClick2}>Button 2</button>
      <button  className='btn bg-green-300 w-4/12 mx-auto'onClick={() =>{alert('Button 3 clicked')}}>Button 3</button>
      <button  className='btn bg-green-400 w-4/12 mx-auto'onClick={()=> addToFive(5)}>Button 4</button>
      <button></button>
      <UseState></UseState>
    </div>
  )
}

export default App
