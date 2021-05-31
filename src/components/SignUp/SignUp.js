import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './SignUp.css';
import {Paper} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

function SignUp() {
    const [password, setPassword] = useState("");
    const history = useHistory();

    const [error, setError] = useState({
        firstName:false,
        lastName:false,
        email:false,
        password:false,
        confirmPassword:false
    });
    const [detail, setDetail] = useState({
        firstName:'',
        lastName:'',
        email:''
    });

    const handleClick = (event) => {
         
        for (const [, value] of Object.entries(error)) {
            if (value){
                return
            }
        }
        history.push("/register",{ detail: [detail]});
    }

    const handleNameChange = (e) => {
        const { name, value } = e.target;
        
        if (!value.match(/^[ 0-9a-zA-Z]+$/)) {
            setError(pre => ({...pre,[name]:true}))
            
        }
        else {
            setError(pre => ({...pre,[name]:false}))
            }
        setDetail(pre => ({...pre,[name]:value}))
    }

    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        
        if (value.match(/^\S+@\S+\.\S+$/)) {
            setError(pre => ({...pre,[name]:false}))
        }
        setDetail(pre => ({...pre,[name]:value}))
    }

    const handleEmailBlur = (e) => {
        const { name, value } = e.target;

        if (!value.match(/^\S+@\S+\.\S+$/)) {
            setError(pre => ({...pre,[name]:true})) 
        }
        else {
            setError(pre => ({...pre,[name]:false}))
            }
        setDetail(pre => ({...pre,[name]:value}))
    }

    const handlePasswordChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        if(password.match('^[a-zA-Z0-9!@#$&()\\-`.+,/"]*$'))
        {
            if(password.length + 1 > 7)
            {
                setError(pre => ({...pre,[name]:false}))
            }
            else {
                setError(pre => ({...pre,[name]:true}))
            }
        }
        setPassword(value)
    }

    const handleConfirmPasswordChange = (e) => {
        const { name, value } = e.target;
        if(password===value)
        {
            setError(pre => ({...pre,[name]:false}))
        }
        else
        {
            setError(pre => ({...pre,[name]:true}))
        }
        
    }

    return (
        <Container component="main" maxWidth="xs" className="mainContainer">
            <div>
            <Typography variant="h4" className="typoText">
                Dal Online User Registration Form!
            </Typography>
            </div>
            <Paper elevation={3} className="inside">
                <form onSubmit={handleClick}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                name="firstName"
                                variant="outlined"
                                id="firstName"
                                label="First Name"
                                fullWidth
                                required
                                onChange={handleNameChange}
                                error={error.firstName}
                                helperText={error.firstName ? 'Only Alphanumeric Allowed' : ''}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="lastName"
                                variant="outlined"
                                id="lastName"
                                fullWidth
                                required
                                label="Last Name"
                                onChange={handleNameChange}
                                error={error.lastName}
                                helperText={error.lastName ? 'Only Alphanumeric Allowed' : ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                name="email"
                                id="email"
                                label="Email"
                                type="email"
                                fullWidth
                                required
                                onChange={handleEmailChange}
                                onBlur={handleEmailBlur}
                                error={error.email}
                                helperText={error.email ? 'Invalid Email Format' : ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="password"
                                variant="outlined"
                                id="password"
                                label="Password"
                                type="password"
                                fullWidth
                                required
                                onPaste={(e)=>{e.preventDefault()}}
                                onChange={handlePasswordChange}
                                error={error.password}
                                helperText={error.password ? 'Password should contain alphanumeric and special characters' : ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                name="confirmPassword"
                                id="confirm-password"
                                label="Confirm Password"
                                type="password"
                                fullWidth
                                required
                                onChange={handleConfirmPasswordChange}
                                error={error.confirmPassword}
                                helperText={error.confirmPassword ? 'Passwords do not match' : ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" color="primary" fullWidth variant="contained" > 
                            Register   
                            </Button>
                        </Grid>
                    </Grid>

                </form>
            </Paper>
        </Container>
    );
}

export default SignUp;