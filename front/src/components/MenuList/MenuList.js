import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const MenuList = ({ items, active }) => {
    return (
        <List>
            {items.map(({ Icon, text, to }, index) => (
                <Link to={to} key={text}>
                    <ListItem button selected={index === active}>
                        <ListItemIcon>
                            <Icon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                </Link>
            ))}
        </List>
    );
};

MenuList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            Icon: PropTypes.any.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    active: PropTypes.number,
};

export default MenuList;
