import Weather from './components/Weather';
import UserStatus from "./components/UserStatus";
import Greetings from "./components/Greetings";
const App = () => {
  return <section>
    <Weather />
    <UserStatus loggedIn={true}   isAdmin={true} />
    <Greetings timeofDay="Evening" name="Rohit" />
  </section>
}

export default App;