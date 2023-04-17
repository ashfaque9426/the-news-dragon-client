import React from 'react';
import qZone1 from '../../../../../assets/qZone1.png'
import qZone2 from '../../../../../assets/qZone2.png'
import qZone3 from '../../../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary text-center my-4 py-4'>
            <h4>Q-Zone</h4>
            <div>
                <img src={qZone1} alt="qZone1 image" />
            </div>
            <div>
                <img src={qZone2} alt="qZone2 image" />
            </div>
            <div>
                <img src={qZone3} alt="qZone3 image" />
            </div>
        </div>
    );
};

export default QZone;