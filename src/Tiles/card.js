import React from 'react';

const card2 = ({ data }) => (
    <div className="card ml-auto" >
        <img className="card-img-top" style={{width: '200px'}} src="https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="img"/>
        <div className="card-body">
            <h4 className="card-title">{data.tile}</h4>
            <p className="card-text">Register: {data.register}</p>
        </div>
    </div>
);

export default card2;
