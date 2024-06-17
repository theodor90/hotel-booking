import { useState, useEffect } from 'react';
import './SearchBar.css';
import '../../css/Buttons.css';
import DatePicker from './DatePicker/DatePicker';
import DestinationPicker from './DestinationPicker/DestinationPicker';

function SearchBar() {
    const [nights, setNights] = useState(0);
    const [dates, setDates] = useState([
        new Date(),
        new Date()
    ]);

    useEffect(() => {
        dates != null ? setNights(dates[1].getDate() - dates[0].getDate()) 
            : setNights(0);
    });

    return (
        <div className='search-bar'>
            <div className='search-item'>
                <p>DESTINATION</p>
                <DestinationPicker />
            </div>
            <div className='search-item'>
                <p>{(nights <= 0) ? 'DATES' : (nights == 1) ? '1 NIGHT' : 
                    nights + ' NIGHTS'}</p>
                <DatePicker 
                    dates={dates} 
                    setDates={setDates} />
            </div>
            <button className="search-item search-btn btn">Find Hotels</button>
        </div>
    );
};

export default SearchBar;