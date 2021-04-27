import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import axios from 'axios'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        flexWrap: 'nowrap'
    }
}));

function useForceUpdate() {
    const [, forceUpdate] = React.useState();
  
    return React.useCallback(() => {
      forceUpdate(s => !s);
    }, []);
  }

function GetGenreDetails(id) {
    const [MyGenreDetailsData, setMyGenreDetailsData] = useState([]);
    const [shouldRender, setShouldRender] = useState(false);
    useEffect(() => {
        const requesrURL = 'https://api.themoviedb.org/3/discover/movie?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=' + id.MyGenreDetailsData;
        axios.get(requesrURL)
            .then((repos) => {
                const allRepos = repos.data;
                setMyGenreDetailsData(allRepos.results)
            }).then(
                data => {
                    setShouldRender(true);
                });
    }, []);

    const message = (data) => {
        var mylist = JSON.parse(localStorage.getItem('mylist'));
        if (mylist == null) { mylist = [] }
        var someData =
        {
            'id': data.id,
            'image': "https://image.tmdb.org/t/p/w185/" + data.backdrop_path,
            'name': data.original_title
        };
        mylist.push(someData);
        mylist = mylist.filter((ele, ind) => ind === mylist.findIndex(elem => elem.id === ele.id))
        localStorage.setItem('mylist', JSON.stringify(mylist));
        id.something.fetchGenreList();
    }

    const classes = useStyles();

    return (
        <>
            {
                shouldRender && <div className='container-fluid' >
                    <div className={classes.root} style={{ overflow: "hidden" }}>
                        <GridList className={classes.gridList} cols={5}>
                            {MyGenreDetailsData && MyGenreDetailsData.length ? MyGenreDetailsData.map((tile) => (
                                <GridListTile key={tile.id}>
                                    <img src={'https://image.tmdb.org/t/p/w500/' + tile.backdrop_path} onClick={() => { message(tile) }}
                                        alt={tile.original_title} />
                                    <GridListTileBar
                                        title={tile.original_title}
                                    />
                                </GridListTile>
                            )) : ''}
                        </GridList>
                    </div>
                </div>
            }
        </>
    );

}

export default GetGenreDetails
