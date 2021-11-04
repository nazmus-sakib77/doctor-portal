import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { Container, Grid } from '@mui/material';


const Calender = ({ date, setDate }) => {

    return (
        <Container>
            <Grid container spacing={2} style={{ alignItems: 'center' }} >
                <Grid item xll={8} xl={7} lg={8} md={8} xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            className="MuiDialogContentText-root"
                            value={date}
                            openTo="day"
                            onChange={(newdate) => {
                                setDate(newdate);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Calender;