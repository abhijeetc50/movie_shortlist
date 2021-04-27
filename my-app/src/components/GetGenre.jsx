import React from 'react';
import propTypes from 'prop-types';
import GetGenreDetails from './GetGenreDetails'

GetGenre.propTypes = {
    GenreList: propTypes.array,
};

GetGenre.defaultProps = {
    GenreList: [],
};

function GetGenre(props) {
    const { GenreList } = props;
    var getGenreDetailsComponent = {};
    if (GenreList) {
        return (
            <>
                {GenreList.map(post => (
                    <div className='container-fluid'>
                        <h3 style={{ 'padding': "10px" }} key={post.id}>{post.name}</h3>
                        <GetGenreDetails something = {props.something}  MyGenreDetailsData={post.id} />
                    </div>
                ))}
            </>

        );
    }
}

export default GetGenre