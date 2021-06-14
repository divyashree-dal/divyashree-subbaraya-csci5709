import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Grid, Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import SearchBar from "material-ui-search-bar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    paper: {
        width: "250px",
        height: "100%"
    },
    search: {
        width: "25%",
        margin: "auto"
    }
});

function LoginUsers() {

    const classes = useStyles();
    const [usersList, setUsers] = useState([]);
    const history = useHistory();
    const [filteredUsers, setFilteredUsers] = useState([]);

    const api_url = "https://tutorial4-api.herokuapp.com/api/users/";

    const requestSearch = (searched) => {
        if (searched === "") {
            setFilteredUsers(usersList)
        }
        else {
            setFilteredUsers(usersList.filter((object) => {
                return object.firstName.toLowerCase().includes(searched.toLowerCase()) || object.lastName.toLowerCase().includes(searched.toLowerCase())
            }))
        }
    }
    const cancelSearch = () => {
        requestSearch("");
    };

    useEffect(() => {
        async function fetchUsersList() {
            await axios.get(api_url).then((res) => {
                setUsers(res.data.data)
                setFilteredUsers(res.data.data)
            });
        };
        fetchUsersList();
    }, []
    );

    async function handleClick(id) {
        history.push("/loginsucess/" + id);
    }

    return (

        <div>
            <Typography variant="h4" className="typoText">
                Users
            </Typography>

            <Paper>
                <div className={classes.search}>
                    <SearchBar
                        value={""}
                        onChange={(searchVal) => requestSearch(searchVal)}
                        onCancelSearch={() => cancelSearch()}
                        placeholder="Search by first name or last name"

                    />
                </div>
                
                <Grid container spacing={3} >
                    {filteredUsers.map((r) =>
                    (
                        <Grid item xs={3} md={3} style={{ margin: 'auto', padding: '2%' }}>
                            <Paper className={classes.paper} elevation={3}>
                                <img key={r.id} src={r.picture} alt="user" style={{ width: "100%", height: "100%" }}
                                    onClick={() => handleClick(r.id)} />
                                <Typography variant="h6" className="typoText">
                                    {r.firstName} {r.lastName}
                                </Typography>
                            </Paper>
                        </Grid>

                    ))}
                </Grid>
            </Paper>
        </div>
    )
}
export default LoginUsers;