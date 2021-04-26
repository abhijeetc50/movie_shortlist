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
    const parent = { width: '100%', height: '250px' };
    const message = (data) => {
        var mylist =  JSON.parse(localStorage.getItem('mylist'));
        if(mylist == null){mylist = []}
        var someData = 
            {
                'id': data.id, 
                'image': "https://image.tmdb.org/t/p/w185/"+data.backdrop_path, 
                'name': data.original_title
            }
         ;
        mylist.push(someData);
        localStorage.setItem('mylist', JSON.stringify(mylist));
       }
    if (GenreList) {
        return (
            <div style={parent}>
                <h2 style={{ 'padding': "10px" }}>Genre One</h2>
                <HorizontalScroll className="test">
                    {GenreList.map(post => (
                        <div style={{ 'padding': "10px" }}>
                            <img style={child} key={post.id} onClick={() => {message(post)}}
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

function MyList(props) {
    const { GenreList } = props;
    const child = { width: '300px', height: '140px' };
    const parent = { width: '100%', height: '400px' };
    if (GenreList) {
        const imageClick = () => {
            console.log('Click');
        } 
        
        return (
            <div style={parent}>
                <h2 style={{ 'padding': "10px" }}  onClick={this.imageClick}>Genre One</h2>
                <HorizontalScroll>
                    {GenreList.map(post => (
                        <div style={{ 'padding': "10px" }} onClick={this.imageClick}>
                            <img style={child} key={post.id}
                                className=""
                                src={'https://image.tmdb.org/t/p/w185/' + post.backdrop_path}  onClick={this.imageClick}/>
                            <h5 className="text-center">{post.original_title}</h5>
                        </div>
                    ))}
                </HorizontalScroll>
            </div>
        );
    }
}

export default GetGenre
