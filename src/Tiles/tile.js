import data from './data';
import Card2 from './card';

import React from 'react';

const tile = () => data.length >0 && (
    <div className="container my-card">
        <div className="row">
        {data.map((data, id) => (
            <Card2 data={data} key={id} />
        ))}
        </div>
    </div>
);

export default tile;