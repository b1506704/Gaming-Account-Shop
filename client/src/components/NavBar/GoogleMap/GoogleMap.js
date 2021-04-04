import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './GoogleMap.css';

const GoogleMap = () => {
    const [location, setLocation] = useState({
        address: 'Bà Triệu, Ninh Kiều District, Can Tho City, Vietnam',
        lat: 10.036521238174993,
        lng: 105.78938745372986,
    });
    const [zoomLevel, setZoomLevel] = useState(15);

    return(
        <div className="map_container drop_shadow">
            <h2> Liên hệ </h2>
            <GoogleMapReact
                bootstrapURLKeys= {{key: 'AIzaSyBi33ikA-UNokHaz0abercTBz2bOjjdh38'}}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
            </GoogleMapReact>
        </div>
    );
}
export default GoogleMap;