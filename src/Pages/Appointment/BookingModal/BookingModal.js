import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { Fade, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const BookingModal = ({ openBooking, handleCloseBooking, booking }) => {
    const { name, time } = booking
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                hideBackdrop
                open={openBooking}
                onClose={handleCloseBooking}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Fade in={openBooking}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {time}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;