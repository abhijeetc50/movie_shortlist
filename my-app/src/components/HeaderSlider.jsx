import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import propTypes from 'prop-types';

HeaderSlider.propTypes = {
    SliderList: propTypes.array,
};

HeaderSlider.defaultProps = {
    SliderList: [],
};

function HeaderSlider(props) {
    const { SliderList } = props;
    if (SliderList) {
        return (
            <div>
                <div className='container-fluid' >
                    <Carousel>
                        {SliderList.map(post => (
                            <Carousel.Item  key={post.id} style={{ 'height': "300px" }} >
                                <div className="img-gradient">
                                <img style={{ 'height': "300px" }}
                                    className="d-block" alt={post.original_title}
                                    src={'https://image.tmdb.org/t/p/w185/' + post.backdrop_path} />
                                <Carousel.Caption>
                                    <h3 >{post.original_title}</h3>
                                </Carousel.Caption>
                                </div>
                            </Carousel.Item  >
                        ))}

                    </Carousel>

                </div>

            </div>
        )
    }
}

HeaderSlider.propTypes = {

}

export default HeaderSlider

