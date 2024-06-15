import { useState } from 'react';
import { DateRangePicker } from 'rsuite';
import './DatePicker.less';

function DatePicker(props) {
    return <DateRangePicker 
        value={props.dates}
        onChange={props.setDates}
        editable={false}
        character=' to '
        placeholder='When do you want to go?'
        />;
};

export default DatePicker;