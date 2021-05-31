
import { useLocation } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Paper} from '@material-ui/core';
import './User.css';

function User() {

    const location = useLocation();
   
    return (

        <Container component="main" maxWidth="xs" className="mainContainer">
            <Typography variant="h5" style={{ textAlign: 'center'}}>
                Welcome to Dal Online Portal!
            </Typography>
            
            <Paper elevation={3} className="insideUser">

                <Typography variant="h5" style={{ textAlign: 'center',display:'inline-block'}}>
                    Your First Name:{location.state.detail[0].firstName} 
                </Typography>

                <Typography variant="h5" style={{ textAlign: 'center',display:'inline-block' }}>
                    Your Last Name: {location.state.detail[0].lastName}
                </Typography>

                <Typography variant="h5" style={{ textAlign: 'center',display:'inline-block' }}>
                    Your Email ID: {location.state.detail[0].email}
                </Typography>

            </Paper>
        </Container>    

    );    
}

export default User;