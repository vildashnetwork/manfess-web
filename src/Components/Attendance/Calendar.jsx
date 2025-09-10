import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// ===============
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Details from './Details';

function StaticDatePickerLandscape({ Attendaces }) {
    const [value, setValue] = React.useState(dayjs(new Date()));
    return (
        <>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker orientation="portrait" />

            </LocalizationProvider> */}

            <div className=' calendar-attendance'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                        <DemoItem label="">
                            <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
                <div className='attendance-summary'>
                    <h2> Summary For {value.format("DD MMM, YYYY")}</h2><br />
                    <div className="card p attendance-card" >
                        <h4>Class : <span>Form 3B</span></h4>
                        <br />
                        <div className="submited-teacher flex-row">
                            <img className="teacher-image" src="src\\assets\\logo.png" alt="" width={40} style={{ marginRight: "10px", borderRadius: "50%" }} />
                            <div>
                                <span className='p'>Submitted by:</span>
                                <h5 className='teacher-name'style={{ marginTop: "-12px" }}> <br />Kimbi Achenyu Bipninda</h5>
                            </div>

                        </div>
                        <div className="flex-between " style={{ marginTop: "12px" }}>
                            <p className='p flex-row'> <span className='flex-row'> <FactCheckIcon style={{ color: "black" }} /> Total Registered:   <span><b>90</b></span></span> </p>
                            <p className='p flex-row'> <span className='flex-row'> <CheckCircleIcon style={{ color: "green" }} /> Present : <span>86</span></span> </p>
                        </div>
                        <div className="flex-between  " style={{ margin: "12px 0" }}>
                            <p className='p flex-row'> <span className='flex-row'> <AccessTimeIcon style={{ color: "light-gray" }} /> <b>{dayjs(new Date().getTime()).format('  h:mm A')}</b></span> </p>
                            <p className='p flex-row'> <span className='flex-row' style={{ marginRight: "15px" }}> <RemoveCircleOutlineIcon style={{ color: "red" }} /> Absent : <span><b>4</b></span></span> </p>

                        </div>
                        {/* <div className='flex-row'><p><button className="button btn-neutral" > View Details</button></p></div> */}
                        <Details date={value.format("DD MMM, YYYY")}></Details>
                    </div>
                </div>

            </div>







        </>


    );
}
function Calendar() {
    return (
        <div>

            <StaticDatePickerLandscape />


        </div>
    )
}

export default Calendar
