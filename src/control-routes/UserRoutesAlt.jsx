import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import useContextProvider from '../hooks/useContextProvider';

const UserRoutesAlt = ({children}) => {
  const {user, userRole, userLoaded} = useContextProvider();
  const {state} = useLocation();

  if (!userLoaded) return (
    <main className="mt-10 text-center">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </main>
  );

  if (user) return (
    <Navigate to={state?.prevPath ? state?.prevPath : userRole === "admin" ? '/admin' : '/dashboard'} />
  );

  return children;
};

export default UserRoutesAlt;

UserRoutesAlt.propTypes = {
  children: PropTypes.node
}