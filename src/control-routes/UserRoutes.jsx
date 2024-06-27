import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useContextProvider from '../hooks/useContextProvider';

const UserRoutes = ({children}) => {
  const {user, userRole, userLoaded} = useContextProvider();

  if (!userLoaded) return (
    <main className="mt-10 text-center">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </main>
  );

  if (user && userRole !== "admin") return children;

  return (
    <Navigate to='/' />
  )
};

export default UserRoutes;

UserRoutes.propTypes = {
  children: PropTypes.node
}