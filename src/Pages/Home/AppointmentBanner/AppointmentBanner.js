import React from 'react';
import { Button, Container, container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'

const appointmentBg = {
    background: `url(${bg})`,
    backgroundBlendMode: 'overlay',
    backgroundColor: '#20232b',
    marginTop: 175,
}

const myStyles = makeStyles({
    btnCustom: {
        color: 'white',
        backgroundImage: 'linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)',
        textAlign: 'center',
        textTransform: 'uppercase',
        transition: '0.5s',
        backgroundSize: '200% auto',
        color: 'white',
        display: 'block',
        '&:hover': {
            backgroundPosition: 'right center',
            color: ' #fff',
            textDecoration: 'none',
        }
    }
})

const AppointmentBanner = () => {
    const classes = myStyles()
    return (
        <Container>
            <Grid style={appointmentBg} container >
                <Grid xxl={5} xl={5} md={5} xs={8}>
                    <img
                        style={{ width: 450, marginTop: '-100px', marginBottom: '-4px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid xxl={7} xl={7} md={7} xs={4}>
                    <Typography variant="h6" sx={{ mt: 5, fontFamily: 'Poppins', fontWeight: 600, color: '#1CC7C1', letterSpacing: 2 }}> APPOINTMENT </Typography>
                    <Typography variant="h4" sx={{ mt: 4, mb: 4, fontSize: 34, fontFamily: 'Poppins', fontWeight: 500, color: 'white', letterSpacing: 2 }}> Make an appointment Today </Typography>

                    <Typography variant='p' sx={{ mt: 5, fontFamily: 'Poppins', fontWeight: 400, color: 'white', lineHeight: 2 }}> At Simply Teeth, we are a modern practice committed to looking after all your dental needs with exceptional service, quality and affordability</Typography>
                    <Button className={classes.btnCustom} sx={{ mt: 5, px: 6, py: 1, fontFamily: 'Poppins', fontWeight: 500, }}> Learn More </Button>
                </Grid>
            </Grid>
        </Container>

    );
};

export default AppointmentBanner;