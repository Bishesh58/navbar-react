import './App.css';
import NavButton from './Components/NavButton';

function App() {
  return (
    <div className="app">
      <NavButton 
      title="Mountain"
      img="https://images.unsplash.com/photo-1548604130-5db6fcf5fc13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
      />
      <NavButton 
      title="lake"
      img="https://images.unsplash.com/photo-1596003903067-bf5762ad5c19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
      />
      <NavButton 
      title="desert"
      img="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <NavButton 
      title="Jungle"
      
      img="https://images.unsplash.com/photo-1475570407181-7a59ce5593da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
      />
    </div>
  );
}

export default App;
