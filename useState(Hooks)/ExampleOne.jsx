import {useState} from 'react'

const ExampleOne = () => {
  const [count,setCount] = useState(()=>{
    const initialValue= 10;
    return initialValue;
  }); 
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

export default ExampleOne;