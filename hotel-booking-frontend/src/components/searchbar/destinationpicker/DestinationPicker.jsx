import { InputPicker } from 'rsuite';
import './DesinationPicker.css';

function DesinationPicker() {
    //Replace with api call
    const destinations = [
        "Rome",
        "Madrid",
        "Paris",
        "Stockholm",
        "London",
        "New York"
    ].map(item => ({ label: item, value: item}));

    return (
        <InputPicker 
            data={destinations}
            placeholder="Where do you want to go?"/>
    );
};

export default DesinationPicker;