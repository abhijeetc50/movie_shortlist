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
                    <div className='container-fluid'>
                        <h3 style={{ 'padding': "10px" }} style={{ 'padding-top': "30px" }} key={post.id}>{post.name}</h3>
                        <GetGenreDetails allAPICalls={props.allAPICalls} MyGenreDetailsData={post.id} />
                    </div>
                ))}
            </>

        );
    }
}

export default GetGenre