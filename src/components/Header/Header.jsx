import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant = "h5" className={classes.tittle}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant = "h6" className={classes.tittle}>
                        Explore new places
                    </Typography>
                    <Autocomplete>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..."/>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;