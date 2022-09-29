import { Tab, Tabs } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { CustomTabel, TripsDetailsModal } from '../../../components';
import { TRIPS_DETAILS_MODAL } from '../../../constants/modalTypeConstant';
import { showCustomModal, logout } from '../../../store/sagaActions';
import tripsData from '../../../_mocks/trips';
import vehicalsData from '../../../_mocks/vehicals';

import './home.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  const handleTripsRowClick = () =>
    dispatch(
      showCustomModal({
        customModalType: TRIPS_DETAILS_MODAL,
        tempCustomModalData: {
          tripStart: 'Bonn',
          tripEnd: 'Cologue',
          tripTime: '3 hours',
          tripParcelDelivered: 20,
          tripTotalParcelWeight: '200 kgs'
        }
      })
    );

  return (
    <>
      <div className="p-5">
        <div className="d-flex justify-content-end mb-5">
          <i className="fa fa-sign-out cp" aria-hidden="true" onClick={handleLogout}></i>
        </div>
        <Tabs defaultActiveKey="vehicals" id="uncontrolled-tab-example" className="mb-3 d-flex">
          <Tab eventKey="vehicals" title="Vehicals">
            <CustomTabel type="VEHICALS" tabelData={vehicalsData} />
          </Tab>
          <Tab eventKey="trips" title="Trips">
            <CustomTabel
              type="TRIPS"
              rowClassName="cp"
              tabelData={tripsData}
              handleRowClick={handleTripsRowClick}
            />
          </Tab>
        </Tabs>
      </div>

      {/* modals */}
      <TripsDetailsModal />
    </>
  );
};

export default HomePage;
