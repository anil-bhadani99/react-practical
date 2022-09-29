/* eslint-disable no-undef */
import { useEffect } from 'react';

const MapComponent = ({ center, zoom, from, to }) => {
  let map;
  let mapOptions = {
    center: center,
    zoom: zoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    showLocateMeButton: false,
    showZoomButtons: true,
    showMapTypeSelector: true,
    disablePanning: false,
    disableScrollWheelZoom: false,
    minZoom: 2,
    title: 'markerTitle',
    label: 'Hello'
  };

  function initialize() {
    const portalDiv = document.getElementById('map');
    map = new google.maps.Map(portalDiv, mapOptions);

    let userCoor = [
      [from.fromLocation, from.latitude, from.longitude],
      [to.toLocation, to.latitude, to.longitude]
    ];

    let userCoorPath = [
      { lat: from.latitude, lng: from.longitude },
      { lat: to.latitude, lng: to.longitude }
    ];
    let userCoordinate = new google.maps.Polyline({
      path: userCoorPath,
      geodesic: true,
      strokeColor: '#41aff8',
      strokeOpacity: 1,
      strokeWeight: 5
    });

    userCoordinate.setMap(map);
    map.setCenter(userCoordinate);

    for (let i = 0; i < userCoor.length; i++) {
      new google.maps.Marker({
        position: new google.maps.LatLng(userCoor[i][1], userCoor[i][2]),
        map: map
      });
    }
  }

  useEffect(() => {
    initialize();
  }, []);

  return <div id="map" className="w-100 h-100" />;
};

export default MapComponent;
