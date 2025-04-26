const Greetings = (props) => {
   return props.timeofDay==="Morning" ? (<h1>Good Morning! {props.name}</h1>) : (<h1>Good Evening! {props.name}</h1>)
}

export default Greetings