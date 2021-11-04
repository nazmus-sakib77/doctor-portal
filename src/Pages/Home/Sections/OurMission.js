import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
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


const OurMission = () => {
    const classes = useStyles()

    return (
        <Container>
            <Grid container component="main" sx={{ mt: 20 }}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://i.ibb.co/84nbqsL/fmc-dental-clinic-background.png)',
                        backgroundRepeat: 'no-repeat',
                        height: 450,
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} elevation={6} square>
                    <Box
                        sx={{
                            my: 6,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',

                        }}
                    >
                        <Typography variant='h4' sx={{ fontFamily: 'Poppins', fontWeight: 500, color: '#3A4256' }}> Exceptional Dental Care, on Your Terms</Typography>

                        <Typography variant='p' sx={{ mt: 5, fontFamily: 'Poppins', fontWeight: 400, color: '#a2a2a2' }}> At Simply Teeth, we are a modern practice committed to looking after all your dental needs with exceptional service, quality and affordability to all our patients. Every member of our team is friendly, gentle and passionate about what we do. We take our time to get to know you and answer any questions or concerns that you may have because that is what we are here for.</Typography>
                        <Button className={classes.btnCustom} sx={{ mt: 5, px: 6, py: 1, fontFamily: 'Poppins', fontWeight: 500, }}> Learn More </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    );
};
export default OurMission;
