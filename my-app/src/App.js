import React, { useState, useEffect } from 'react';
import './App.css';
import GetGenre from './components/GetGenre';
import HeaderSlider from './components/HeaderSlider';
import MyList from './components/MyList';

function App() {

  const [GenreList, setGenreList] = useState([]);
  const [SliderList, setSliderList] = useState([]);
  const [MyListn, setMyList] = useState([]);
  var getGenreComponent = {};
  var something  = {
    fetchGenreList: async () =>{
      const requesrURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US';
      const response = await fetch(requesrURL);
      const responseJSON = await response.json();
      setGenreList(responseJSON);
      const requesrURL2 = 'https://api.themoviedb.org/3/discover/movie?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10752';
      const response2 = await fetch(requesrURL2);
      const responseJSON2 = await response2.json();
      setSliderList(responseJSON2);
      const response3 = JSON.parse(localStorage.getItem('mylist'));
        if (response3 == null) { response3 = [] }
        setMyList(response3);
    }
  };


  useEffect(() => {
    something.fetchGenreList();
  }, [])

  return (
    <div className="App">
      <HeaderSlider SliderList={SliderList.results} />
      <MyList something = {something} MyListData={MyListn} />
      <GetGenre something = {something} GenreList={GenreList.genres} />
    </div>
  );
}

export default App;
