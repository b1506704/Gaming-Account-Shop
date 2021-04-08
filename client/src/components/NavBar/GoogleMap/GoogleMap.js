import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './GoogleMap.css';

const GoogleMap = () => {
    const [location, setLocation] = useState({
        address: 'Trường Đại Học Thủ Dầu Một, 6 Đường Trần Văn Ơn, P. Phú Hòa, Tp. Thủ Dầu Một, Tỉnh Bình Dương, Vietnam',
        lat: 10.980327606201172,
        lng: 106.67426300048828,
    });
    const [zoomLevel, setZoomLevel] = useState(15);

    return(
        <div className="map_container drop_shadow">
            <h2> Liên hệ shop </h2>
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