import React, { useState } from 'react'
import propTypes from 'prop-types';
import { Button } from "react-bootstrap";
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
        flexWrap: 'nowrap',
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
    const deleteMylist = (data) => {
        var mylist = JSON.parse(localStorage.getItem('mylist'));
        var index = mylist.findIndex(x => x.id === data.id);
        if (index !== -1) {
            mylist.splice(index, 1);
        }
        localStorage.setItem('mylist', JSON.stringify(mylist));
        props.allAPICalls.fetchAllData();
    }
    const [isHovered, setHover] = useState(false);
    const { MyListData } = props;
    const classes = useStyles();
    if (MyListData.length > 0) {
        return (
            <div className='container-fluid'>
                <h3 style={{ 'padding': "10px" }} style={{ 'padding-top': "30px" }}>My List</h3>
                <div className={classes.root, 'hellow'} style={{ overflow: "hidden" }}>
                    <>
                        <GridList className={classes.gridList} cols={5}>
                            {MyListData.map((tile) => (
                                <GridListTile className='imageContainer' key={tile.id} onMouseOver={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)} >
                                    <img src={tile.image} alt={tile.name} />
                                    {isHovered && (
                                        <Button size="sm"
                                            style={{
                                                position: "absolute",
                                                top: "5px",
                                                right: "5px",
                                            }} variant="danger" onClick={() => { deleteMylist(tile) }}>
                                            Delete
                                        </Button>
                                    )}
                                    <GridListTileBar
                                        title={tile.name}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </>
                </div>
            </div>
        );
    } else {
        return (
            <div className='container-fluid'>
                <h3 style={{ 'padding': "10px" }} style={{ 'padding-top': "30px" }}>Nothing here! Scroll to discover more</h3>
            </div>
        )
    }
}

export default MyList
