

const User = () => {
    const user = [
        {name: "Rohit",
          age: 22,
          city: "Delhi",
        },
        {
          name: "Parth",
          age: 21,
          city: "Indore",
        },
        {
          name: "Raj",
          age: 23,
          city: "Mumbai",
        },
      ];
        return <main>
          {user.map(({name,age,city}) => (
            <ul key={Math.random()}>
              <li>{name}</li>
              <li>{age}</li>
              <li>{city}</li>
            </ul>
          ))}
        </main>
}

export default User;