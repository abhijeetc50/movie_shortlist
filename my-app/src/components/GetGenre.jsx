import React from 'react';
import propTypes from 'prop-types';
import HorizontalScroll from 'react-scroll-horizontal'

GetGenre.propTypes = {
    GenreList: propTypes.array,
};

GetGenre.defaultProps = {
    GenreList: [],
};

function GetGenre(props) {
    const { GenreList } = props;
    const child = { width: '300px', height: '140px' };
    const parent = { width: '100%', height: '400px' };
    const message = (data) => {
        var mylist = localStorage.getItem('mylist');
        if (mylist == null) { mylist = '{}'; }
        var someData =
            ',{"id": ' + data.id + ', "image": "https://image.tmdb.org/t/p/w185' + data.backdrop_path + '", "name": "' + data.original_title + '"}';
        if (!mylist.includes(data.id)) {
            mylist = mylist + someData;
            localStorage.setItem('mylist', mylist);
        }
    }
    if (GenreList) {
        return (
            <div style={parent}>
                <h2 style={{ 'padding': "10px" }}>Genre One</h2>
                <HorizontalScroll className="test">
                    {GenreList.map(post => (
                        <div style={{ 'padding': "10px" }}>
                            <img style={child} key={post.id} onClick={() => { message(post) }}
                                className=""
                                src={'https://image.tmdb.org/t/p/w185/' + post.backdrop_path} />
                            <h5 className="text-center">{post.original_title}</h5>
                        </div>
                    ))}
                </HorizontalScroll>
            </div>
        );
    }
}

export default GetGenre
