import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';

import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import { Container, Typography } from '@mui/material';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h6" sx={{ textAlign: 'center', mt: 5, fontFamily: 'Poppins', fontWeight: 700, color: '#1CC7C1', letterSpacing: 2 }}> OUR SERVICES </Typography>

                <Typography variant="h3" sx={{ textAlign: 'center', mt: 2, fontFamily: 'Poppins', fontWeight: 600, color: '#3A4256' }}> Services We Provide </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;