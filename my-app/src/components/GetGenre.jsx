import React from 'react';
import propTypes from 'prop-types';
import HorizontalScroll from 'react-scroll-horizontal'

GetGenre.propTypes = {
    GenreList: propTypes.array,
};

GetGenre.defaultProps = {
    GenreList:[],
};

function GetGenre(props) {
    const {GenreList} = props;
    const child = { width: '300px', height: '300px'};
    const parent = { width: '500px', height: '500px'};
    if (GenreList) {
        return (
            <div style={parent}>
                 <HorizontalScroll>
                    {GenreList.map(post => (
                        <li style={child} key={post.id}>{post.name}</li>
                    ))}
               </HorizontalScroll>
            </div>
        );
    }
}

export default GetGenre
