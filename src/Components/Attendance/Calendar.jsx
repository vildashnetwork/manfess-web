import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// ===============
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';


function StaticDatePickerLandscape() {
      const [value, setValue] = React.useState(dayjs(new Date()));
    return (
        <>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker orientation="portrait" />

            </LocalizationProvider> */}
       

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
        <DemoItem label="Calendar">
          <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
    <h1>{value.format("DD MMM YYYY")}</h1>
       {console.log( "Value :"+value)}





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
