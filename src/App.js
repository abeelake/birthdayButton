import logo from './logo.svg';
import './App.css';
import Person from './components/Person'

function App() {
  return (
    <div className="App">
      <Person fNameOfPerson="Jane" lNameOfPerson="Doe" ageOfPerson={45} hairOfPerson="Black"></Person>

      <Person fNameOfPerson="John" lNameOfPerson="Smith" ageOfPerson={88} hairOfPerson="Brown"></Person>
    </div>
  );
}

export default App;
