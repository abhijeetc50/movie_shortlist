import React from 'react'
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'left',
        overflow: 'hidden',
    },
    gridList: {
        flexWrap: 'nowrap' ,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)'
    }
}));

MyList.propTypes = {
    MyListData: propTypes.array,
};

MyList.defaultProps = {
    MyListData: [],
};

function MyList(props) {
    const { MyListData } = props;
    const classes = useStyles();
    if (MyListData) {
        return (
            <div  className='container-fluid' >
                <h2 style={{ 'padding': "10px" }}>My List</h2>
                <div className={classes.root, 'hellow'}  style={{ overflow: "hidden" }}>
                    <GridList className={classes.gridList} cols={5}>
                        {MyListData.map((tile) => (
                            <GridListTile key={tile.id}>
                                <img src={tile.image} alt={tile.name} />
                                <GridListTileBar
                                    title={tile.name}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        );
    }
}

export default MyList
