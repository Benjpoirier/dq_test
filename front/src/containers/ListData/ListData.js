import React from 'react';
import useFetch from '../../hooks/useFetch';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import style from './style';

const ListData = ({ endpoint }) => {
    const { data, call, remove } = useFetch(endpoint, { method: 'GET' });
    const classes = makeStyles(style)();

    function handleDelete(id, index) {
        call(endpoint + '/' + id, { method: 'DELETE' });
        remove(index);
    }

    if (data) {
        return (
            <Grid item md={8} xs={12}>
                <List className={classes.root}>
                    {data.map(({ id, name }, index) => (
                        <ListItem key={name}>
                            <ListItemText id={id} primary={name} />
                            <ListItemSecondaryAction>
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => handleDelete(id, index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Grid>
        );
    }
    return null;
};

ListData.propTypes = {
    endpoint: PropTypes.string.isRequired,
};

export default ListData;
