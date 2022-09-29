import { Outlet } from 'react-router-dom';

import { GuestRoutesLayout, UserRoutesLayout } from '../../layout';

function LayoutWrapper({ isAuthenticated = false }) {
  if (isAuthenticated) {
    return (
      <UserRoutesLayout>
        <Outlet />
      </UserRoutesLayout>
    );
  }
  return (
    <GuestRoutesLayout>
      <Outlet />
    </GuestRoutesLayout>
  );
}

export default LayoutWrapper;
