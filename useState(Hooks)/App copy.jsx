import {useEffect,useState} from 'react'; //remove copy in the name of the file

const App = () => {
  const [value,setValue]=useState(0);
  useEffect(()=>{
    console.log("call  useEfect")
    document.title='Increament ${value}'
  }, [value])
  return (
    <div>
      <h1>
        {value}
      </h1>
      <button onClick={()=>setValue(value+1)}>Click me</button>
    </div>
  )
}

export default App