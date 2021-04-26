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

    if (GenreList) {
        return (
            <>
                {GenreList.map(post => (
                    <>
                        <h2 style={{ 'padding': "10px" }} key={post.id}>{post.name}</h2>
                        <GetGenreDetails MyGenreDetailsData={post.id} />
                    </>
                ))}
            </>

        );
    }
}

export default GetGenre