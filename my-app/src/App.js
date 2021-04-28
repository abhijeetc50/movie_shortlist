import React, { useState, useEffect } from 'react';
import './App.css';
import GetGenre from './components/GetGenre';
import HeaderSlider from './components/HeaderSlider';
import MyList from './components/MyList';

function App() {

  const [GenreList, setGenreList] = useState([]);
  const [SliderList, setSliderList] = useState([]);
  const [MyListn, setMyList] = useState([]);
  var allAPICalls = {
    fetchAllData: async () => {
      const GenreListAPIurl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US';
      const GenreListAPIResponse = await fetch(GenreListAPIurl);
      const GenreListAPIResponseJSON = await GenreListAPIResponse.json();
      setGenreList(GenreListAPIResponseJSON);
      
      const SliderDataAPIurl = 'https://api.themoviedb.org/3/discover/movie?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10752';
      const SliderDataAPIurlResponse = await fetch(SliderDataAPIurl);
      const SliderDataAPIurlResponseJSON = await SliderDataAPIurlResponse.json();
      setSliderList(SliderDataAPIurlResponseJSON);

      var MyListData = JSON.parse(localStorage.getItem('mylist'));
      if (MyListData == null) { MyListData = [] }
      setMyList(MyListData);
    }
  };

  useEffect(() => {
    allAPICalls.fetchAllData();
  }, [])

  return (
    <div className="App">
      <HeaderSlider SliderList={SliderList.results} />
      <MyList allAPICalls={allAPICalls} MyListData={MyListn} />
      <GetGenre allAPICalls={allAPICalls} GenreList={GenreList.genres} />
    </div>
  );
}

export default App;
