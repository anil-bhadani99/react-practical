import { useDispatch, useSelector } from 'react-redux';

import { TRIPS_DETAILS_MODAL } from '../../constants/modalTypeConstant';
import { hideCustomModal } from '../../store/sagaActions';
import CustomModal from './CustomModal';
import Maps from '../map';

const TripsDetailsModal = () => {
  const dispatch = useDispatch();
  const { customModalType, tempCustomModalData } = useSelector((state) => state.modal);

  const closeTnCModal = () => dispatch(hideCustomModal());

  return (
    <CustomModal
      showModal={customModalType === TRIPS_DETAILS_MODAL}
      closeModal={closeTnCModal}
      showCloseButton
      mainClassName="fusionModal">
      <h1 className="modalTitile">Trip details</h1>
      <div className="d-flex flex-column">
        <p className="text-center">
          <span className="fw-bold fs-6 text-danger">Trip Start</span>:{' '}
          {tempCustomModalData?.tripStart}
          <br />
          <span className="fw-bold fs-6 text-danger">Trip End </span>:{' '}
          {tempCustomModalData?.tripEnd}
          <br />
          <span className="fw-bold fs-6 text-danger">Total Trip Time </span>:{' '}
          {tempCustomModalData?.tripTime}
          <br />
          <span className="fw-bold fs-6 text-danger">Total Parcel Delivered </span>:{' '}
          {tempCustomModalData?.tripParcelDelivered}
          <br />
          <span className="fw-bold fs-6 text-danger">Total Weight of the Parcels </span>:{' '}
          {tempCustomModalData?.tripTotalParcelWeight}
          <br />
        </p>
        <div
          className="maps-container d-flex justify-content-center flex-column align-items-center"
          id="map">
          <Maps />
        </div>
      </div>
    </CustomModal>
  );
};

export default TripsDetailsModal;
