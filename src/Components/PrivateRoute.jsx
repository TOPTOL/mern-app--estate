import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';3  

export default function PrivateRoute() {
    const {currentUser} = useSelector((state) => state.user)
  return  currentUser ? < outlet /> : <Navigate to='/sign-in' />;
    
}
