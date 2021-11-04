import { Button, Grid, Paper, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import React from 'react';
import useStyle from '../../../Shared/useStyle/useStyle';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ booking }) => {
    const { btnCustom } = useStyle()
    const { name, time, space } = booking;

    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => {
        setOpenBooking(true);
    };
    const handleBookingClose = () => {
        setOpenBooking(false);
    };

    return (
        <>
            <Grid item xs={8} sm={6} md={4} sx={{ mt: 4 }} >
                <Paper elevation={3} sx={{ textAlign: 'center', m: 1, p: 2 }}>
                    <Typography variant='h5' sx={{ fontFamily: 'Poppins', fontWeight: 500, color: '#1CC7C1', lineHeight: 2 }}>
                        {name}</Typography>
                    <Typography variant='h6' sx={{ fontFamily: 'Poppins', fontWeight: 600, color: '#3A4256', lineHeight: 2 }}>
                        {time}</Typography>
                    <Typography variant='caption' sx={{ fontFamily: 'Poppins', fontWeight: 400, color: '#444444', lineHeight: 2 }}> {space} SPACES AVAILABLE</Typography>
                    <Button onClick={handleBookingOpen} style={btnCustom} sx={{ mx: 9, mt: 2, mb: 2 }} variant='contained'>BOOK APPOINTMENT</Button>
                </Paper>
            </Grid >
            <BookingModal
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
            ></BookingModal>
        </>
    );
};

export default Booking;