import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { guestRoutes, userRoutes } from './routes/mainRoutes/mainRoutes';
import { FallbackSpinner, LayoutWrapper } from './components';

function App() {
  const { authToken } = useSelector((state) => state.auth);

  let routes = [];

  if (authToken) routes = userRoutes;
  else routes = guestRoutes;

  const mainContent = routes.map((route) =>
    route.component ? (
      <Route
        key={route.name}
        path={route.path}
        exact={route.exact}
        name={route.name}
        element={<route.component />}
      />
    ) : (
      route.redirectRoute && <Route path="*" key={route.name} element={<Navigate to="/" />} />
    )
  );
  useEffect(() => {
    // Remove lodader from index.html
    const loaderEle = document.getElementById('root-loader');
    loaderEle.remove();

    // dispatch(authenticationValidatorAction());
  }, []);

  return (
    <Suspense fallback={<FallbackSpinner />}>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutWrapper isAuthenticated={!!authToken} />}>
            {mainContent}
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
