import { React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import './LoginUsers.css';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Login() {

    const [error, setError] = useState({
        email: false,
        password: false
    });

    const [details, setDetails] = useState({
        email: '',
        password: ''
    });

    const [errorSnakebar, setErrorSnakeBar] = useState(false);

    const history = useHistory();

    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        if (value.match(/^\S+@\S+\.\S+$/)) {
            setError(pre => ({ ...pre, [name]: false }))
            setDetails(pre => ({ ...pre, [name]: value }))
        }
        else {
            setError(pre => ({ ...pre, [name]: true }))
        }

    }

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setDetails(pre => ({ ...pre, [name]: value }))
    }

    const handleClickOnSubmit = (e) => {
        e.preventDefault()
        for (const [, value] of Object.entries(error)) {
            if (value) {
                return
            }
        }

        axios.post('https://tutorial4-api.herokuapp.com/api/users/login', {
            email: details.email,
            password: details.password
        }, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                if (response.status === 200) {
                    history.push("/loginsucess")
                }
            }, (error) => {
                setErrorSnakeBar(true);
            });
    }

    const handleCheckedSnackBar = () => {
        setErrorSnakeBar(false)
    }

 
    return (
        <Container component="main" maxWidth="xs" className="mainContainer">
            <div>
                <Typography variant="h4" className="typoText">
                    Login here!
                </Typography>
            </div>

            <Paper elevation={5} className="inside">
                <form onSubmit={handleClickOnSubmit}>
                    <Grid container spacing={2}>
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
                                error={error.email}
                                helperText={error.email ? 'Enter the valid email format': ''}
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
                                onPaste={(e) => { e.preventDefault() }}
                                onChange={handlePasswordChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit"
                                color="primary"
                                variant="contained"
                            >
                            Login
                            </Button>

                        </Grid>
                    </Grid>
                </form>
                
                <Snackbar open={errorSnakebar} autoHideDuration={6000} onClose={handleCheckedSnackBar}>
                    <MuiAlert elevation={6} variant="filled" onClose={handleCheckedSnackBar} severity="error">
                        Invalid Login Credentials!
                    </MuiAlert>
                </Snackbar>
            </Paper>
        </Container>
    );
}

export default Login;