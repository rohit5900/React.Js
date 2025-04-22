const Productinfo = () => {
    const Laptop={
        name:"Macbook Pro",
        price: 900,
        availablity: "In-stock",
    }
  return (
    <div>
        <h1>Name:  {Laptop.name}</h1>
        <p>Price: ${Laptop.price}</p>
        <p>Availability: {Laptop.availablity}</p>
    </div>
  )
}

export default Productinfo;