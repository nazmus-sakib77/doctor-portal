import React from 'react';
import chair from '../../../images/chair.png';
import background from '../../../images/bg.png';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Button, Container, Grid, Typography } from '@mui/material';

const bg = {
    background: `url(${background})`,
    height: 420,

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

const Banner = () => {
    const classes = myStyles()
    return (

        <Box style={bg} sx={{ flexGrow: 1, mt: 15 }}>
            <Container>
                <Grid container>
                    <Grid md={5} xs={12}>
                        <Typography variant="h3" sx={{ mt: 2, fontFamily: 'Poppins', fontWeight: 500, color: '#3A4256' }}> Your New Smile Starts Here </Typography>
                        <Typography variant='p' sx={{ mt: 5, fontFamily: 'Poppins', fontWeight: 400, color: '#1CC7C1', lineHeight: 2 }}> At Simply Teeth, we are a modern practice committed to looking after all your dental needs with exceptional service, quality and affordability</Typography>
                        <Button className={classes.btnCustom} sx={{ mt: 5, px: 4, py: 2, fontFamily: 'Poppins', fontWeight: 500, }}> GET APPOINTMENT </Button>
                    </Grid>
                    <Grid md={7} xs={12}>
                        <img
                            style={{ height: 400 }}
                            src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
};

export default Banner;