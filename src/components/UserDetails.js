import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core';
import {Paper} from '@material-ui/core';
import './LoginUsers.css';

function UserDetails() {

    const [user, setUser] = useState([]);
    const parameter = useParams();
    const api_url = `https://tutorial4-api.herokuapp.com/api/users/${parameter.id}`;

    useEffect(() => {
        async function fetchUserData() {
            await axios.get(api_url).then((res) => {
                setUser(res.data.data)
            });
        };
        fetchUserData();
    },[api_url]);

    return (
        
        <div>
            <Typography variant="h4" className="typoText">
                User Information!
            </Typography>

            <Paper style={{width:'40%', minWidth:'450px', margin:'auto',height:'20%'}}>
                <img key={user.id} src={user.picture} alt= {`${user.firstName}'s pictures`} style={{height: '525px',width:'100%'}} />
                <Grid>
                    <Typography variant="h4" align="center">
                    {user.title}  {user.firstName} {user.lastName}
                    </Typography>

                    <Typography variant="h5" align="center">
                        {user.email}
                    </Typography>

                    <Typography variant="h6" align="center">
                        <label>User Id: </label>{user.id}
                    </Typography>
                </Grid>
           </Paper>
        </div>
      
    )
}

export default UserDetails;
