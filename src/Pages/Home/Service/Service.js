import { CardMedia, Grid } from '@mui/material';
import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { spacing } from '@mui/system';


const Service = (props) => {
    const { name, description, img } = props.service
    return (

        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 275, mt: 10, border: 0, boxShadow: 0 }}>
                <CardContent>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                        image={img}
                        alt="Paella dish"
                    />
                    <Typography variant="h5" sx={{ fontSize: 22, fontFamily: 'Poppins', fontWeight: 500, textAlign: 'center', mt: 3, color: '#3A4256' }} gutterBottom>
                        {name}
                    </Typography>
                    <Typography component="div">
                    </Typography>
                    <Typography sx={{ mt: 2, textAlign: 'center', fontFamily: 'Poppins', fontWeight: 400, color: '#a2a2a2' }} variant="body2">
                        {description}
                    </Typography>
                </CardContent>

            </Card>

        </Grid >
    );
};

export default Service;