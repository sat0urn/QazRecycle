import React from 'react';
import "./aboutus.css"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


export default function mainMap() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />

   /* render() {
        return (
            <div style={{display: "block", paddingBottom: 700}}>
                <Map google={this.props.google}
                     style={{height: 700}}
                     initialCenter={{
                         lat: 51.089216,
                         lng: 71.416557
                     }}
                     zoom={15}
                     onClick={this.onMapClicked}
                >

                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'}/>

                    <InfoWindow onClose={this.onInfoWindowClose}>

                    </InfoWindow>
                </Map>
            </div>

        );
    }*/
}

function Map() {
    const center = {lat: 51.088812, lng: 71.416331};

    return (
        <GoogleMap
            zoom={16}
            center={center}
            mapContainerClassName="map-container"
        >
            <Marker position={{lat: 51.088812, lng: 71.416331}}/>
        </GoogleMap>
    )
}
