import data from './data';
import Titem from './item';

import React from 'react';

const Timeline = () => data.length >0 && (
    <div className="tl-container">
        {data.map((data, id) => (
            <Titem data={data} key={id} />
        ))}
    </div>
);

export default Timeline;