import React from 'react'
import propTypes from 'prop-types';
import HorizontalScroll from 'react-scroll-horizontal'

MyList.propTypes = {
    MyListData: propTypes.array,
};

MyList.defaultProps = {
    MyListData: [],
};

function MyList(props) {
    const { MyListData } = props;
    const child = { width: '300px', height: '140px' };
    const parent = { width: '100%', height: '400px' };
    if (MyListData) {
        return (
            <div style={parent}>
                <h2 style={{ 'padding': "10px" }}>My List</h2>
                <HorizontalScroll className="test">
                    {MyListData.map(post => (
                        <div style={{ 'padding': "10px" }}>
                            <img style={child} key={post.id}
                                className=""
                                src={post.image} />
                            <h5 className="text-center">{post.name}</h5>
                        </div>
                    ))}
                </HorizontalScroll>
            </div>
        );
    }
}

export default MyList
