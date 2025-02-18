import './App.css';
import MovieCard from './components/MovieCard';
import home from './pages/home'

function App() {

  return (
    <>
       <MovieCard movie={{title: "tim's film", release_date:"2024" }}/>
       <MovieCard movie={{title: "john's film", release_date:"2024" }}/>
    </>
  );
}

export default App;
