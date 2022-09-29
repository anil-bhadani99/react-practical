import { Wrapper, Status } from '@googlemaps/react-wrapper';

import { fromCoordinates, toCoordinates } from '../../_mocks/coordinates';
import MapComponent from './MapComponent';

const render = (status) => {
  const isInActive = status === Status.LOADING || status === Status.FAILURE;
  if (isInActive) {
    return <h3>{status} ...</h3>;
  }
  return <></>;
};

const Map = () => {
  const from = fromCoordinates;
  const to = toCoordinates;

  const center = { lat: from.latitude, lng: from.longitude },
    zoom = 9;

  return (
    <Wrapper apiKey={process.env.REACT_APP_END_POINT_URL || ''} render={render}>
      <MapComponent center={center} zoom={zoom} from={from} to={to} />
    </Wrapper>
  );
};

export default Map;
