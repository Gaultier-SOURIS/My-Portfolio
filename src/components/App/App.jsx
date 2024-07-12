import './App.scss';
import NavBar from '@/components/NavBar/NavBar';
import Main from '@/components/Main/Main';

function App() {
  return (
    <div className="flex flex-col lg:flex-row m-12">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
