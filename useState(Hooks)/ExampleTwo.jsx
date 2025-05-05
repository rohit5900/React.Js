import {useEffect, useState} from 'react';
const ExampleTwo = () => {
  const [name,setName]=useState(()=>{
    const savedName = localStorage.getItem('name');
    return savedName? JSON.parse(savedName):"";
  })
  function handleChange(event){
    setName(event.target.value)
  }
  useEffect (()=>{
    localStorage.setItem('name',JSON.stringify(name))
  }, [name])
  const handleClear= ()=>setName("");
  return (
    <div>
        <h1>Name: {name}</h1>
        <input type="text" value={name} onChange={handleChange} placeholder='enter your name' />
        <button onClick={handleClear} >clear Name</button>
    </div>
  )
}

export default ExampleTwo;