const greet= 'Hello!World';
const date= new Date();

const Greet = () => {
    return <div>
        <h1>{greet}</h1>
        <p>Date: {date.getDate()}</p>
        
    </div>
}

export default Greet;