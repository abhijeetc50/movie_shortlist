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
                            <Carousel.Item style={{ 'height': "300px" }} >
                                <img style={{ 'height': "300px" }}
                                    className="d-block w-100"
                                    src={'https://image.tmdb.org/t/p/w185/' + post.backdrop_path} />
                                <Carousel.Caption>
                                    <h3 >{post.original_title}</h3>
                                </Carousel.Caption>
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

