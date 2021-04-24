import React, {useState, useEffect} from 'react';
import './App.css';
import GetGenre from './components/GetGenre';
import HeaderSlider from './components/HeaderSlider';

function App() {

  const [GenreList, setGenreList] = useState([]);
  const [SliderList, setSliderList] = useState([]);

  useEffect(() => {
    async function fetchGenreList(){
      try{
        const requesrURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US';
        const response  = await fetch(requesrURL);
        const responseJSON = await response.json();
        console.log(responseJSON);
        setGenreList(responseJSON);
      }catch{

      }
    }
    async function fetchSliderList(){
      try{
        const requesrURL = 'https://api.themoviedb.org/3/discover/movie?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false';
        const response  = await fetch(requesrURL);
        const responseJSON = await response.json();
        console.log(responseJSON);
        setSliderList(responseJSON);
      }catch{

      }
    }
    fetchSliderList();
  }, [])

  return (
    <div className="App">
      <HeaderSlider SliderList={SliderList.results} />
     <GetGenre GenreList={GenreList.genres} />
    </div>
  );
}

export default App;
