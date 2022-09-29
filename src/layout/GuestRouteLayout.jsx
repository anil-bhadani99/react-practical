import './index.css';

function GuestRouteLayout({ children }) {
  return (
    <>
      <div className="main_body d-flex justify-content-center align-items-center">
        <div className="inner-box">{children}</div>
      </div>
    </>
  );
}

// export default GuestRouteLayout;
export default GuestRouteLayout;
