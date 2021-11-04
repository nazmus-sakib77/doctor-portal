import React from 'react';
import { Box } from '@mui/system';
import { Button, Container, Grid, Typography } from '@mui/material';
import chair from '../../../images/chair.png';
import background from '../../../images/bg.png';
import Calender from '../../../Shared/Calender/Calender';

const bg = {
    background: `url(${background})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '14% 0 ',

}

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Box sx={{ flexGrow: 1 }} style={bg}>
            <Container >
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={4} xl={7}>
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>
                    <Grid item xs={12} md={6} xl={5}>
                        <img src={chair} style={{ width: '500px' }} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentHeader;