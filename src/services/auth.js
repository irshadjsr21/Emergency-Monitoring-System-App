export const loginUser = ({ userType, token }) => {
  localStorage.setItem('userType', userType);
  localStorage.setItem('token', token);
};

export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

export const isAdminLoggedIn = () => {
  const userType = localStorage.getItem('userType');
  return isLoggedIn && userType === 'admin';
};

export const isHospitalLoggedIn = () => {
  const userType = localStorage.getItem('userType');
  return isLoggedIn && userType === 'hospital';
};

export const isAmbulanceLoggedIn = () => {
  const userType = localStorage.getItem('userType');
  return isLoggedIn && userType === 'ambulance';
};
