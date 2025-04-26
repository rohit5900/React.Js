const Weather = () => {
    let temp = 22;
    if(temp<15){
        return <h1>It is cold outside</h1>
    }else if(temp>=15 && temp<=25){
        return <h1>It is nice outside</h1>
    }else{
        return <h1>It is hot outside</h1>
    }
}

export default Weather;