import React from 'react';

const item = ({ data }) => (
    <div className="item">
        <div className="item-contenido">
            <span className="usuario" >
                {data.usuario}
            </span>
            <time>
                {data.fecha}
            </time>
            <p>{data.inicio}</p>
            <p>{data.fin}</p>
            <img className="circle" src="https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="fotico">

            </img>
        </div>
    </div>
);

export default item;