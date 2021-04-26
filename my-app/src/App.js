import React, { useState, useEffect } from 'react';
import './App.css';
import GetGenre from './components/GetGenre';
import HeaderSlider from './components/HeaderSlider';
import MyList from './components/MyList';

function App() {

  const [GenreList, setGenreList] = useState([]);
  const [SliderList, setSliderList] = useState([]);
  const [MyListn, setMyList] = useState([]);

  useEffect(() => {
    async function fetchGenreList() {
      try {
        const requesrURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US';
        const response = await fetch(requesrURL);
        const responseJSON = await response.json();
        setGenreList(responseJSON);
      } catch {

      }
    }
    fetchGenreList();
    async function fetchSliderList() {
      try {
        const requesrURL = 'https://api.themoviedb.org/3/discover/movie?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10752';
        const response = await fetch(requesrURL);
        const responseJSON = await response.json();
        setSliderList(responseJSON);
      } catch {

      }
    }
    fetchSliderList();

    async function fetchMyList() {
      try {
        const response = JSON.parse(localStorage.getItem('mylist'));
        if (response == null) { response = [] }
        setMyList(response);
      } catch {

      }
    }
    fetchMyList();
  }, [])

  return (
    <div className="App">
      <HeaderSlider SliderList={SliderList.results} />
      <MyList MyListData={MyListn} />
      <GetGenre GenreList={GenreList.genres} />
    </div>
  );
}

export default App;
