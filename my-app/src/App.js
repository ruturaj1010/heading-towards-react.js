import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App () {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" />
      {/* <Navbar/> */ }

      <div className="container">
        <TextForm heading="Any suggestion" />
      </div>

    </>
  );
}

export default App;