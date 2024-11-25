import logo from './logo.svg';
import './App.css';
import Booking from './components/Booking';
import BusinessCalendar from './components/BusinessCalendar';

function App() {
  return (
    <div className="App">
      <BusinessCalendar />
      <Booking />
    </div>
  );
}

export default App;
