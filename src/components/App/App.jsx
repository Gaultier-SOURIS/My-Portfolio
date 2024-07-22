import './App.scss';
import NavBar from '@/components/NavBar/NavBar';
import Main from '@/components/Main/Main';

function App() {
  return (
    <div className="flex flex-col m-12 lg:flex-row">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
