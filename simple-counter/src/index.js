import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import './SimpleCounter.css';

export default function SimpleCounter(props) {
    return (
        <div className='counter'>
            <div className='clock'>
                <FontAwesomeIcon icon={faClock} />
            </div>
            <div className='four'>{props.numFour % 10}</div>
            <div className='three'>{props.numThree % 10}</div>
            <div className='two'>{props.numTwo % 10}</div>
            <div className='one'>{props.numOne % 10}</div>
        </div>
    );
}

SimpleCounter.propTypes = {
    numOne: PropTypes.number,
    numTwo: PropTypes.number,
    numThree: PropTypes.number,
    numFour: PropTypes.number
};

let counter = 0;

setInterval(function(){
    
   const four = Math.floor(counter/1000);
   const three = Math.floor(counter/100);
   const two = Math.floor(counter/10);
   const one = Math.floor(counter/1);

    counter ++;
    ReactDOM.render(<SimpleCounter numOne={one} numTwo={two} numThree={three} numFour={four} />, document.querySelector('#root'));
}, 1000);

