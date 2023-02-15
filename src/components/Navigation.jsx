// import { UserMenu } from 'components/Navigation/UserMenu';
// import { AuthNav } from 'components/Navigation/AuthNav';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from 'redux/store';
import css from './Navigation.module.css';
// import {Toolbar,Box,AppBar} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  //   const isLoggedIn = useSelector(getIsLoggedIn)
  return (
    // <>
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       {isLoggedIn ? <UserMenu />: <AuthNav/>}
    //     </Toolbar>
    //   </AppBar>
    // </Box>

    //   <div className={css.wrapper}>
    //     <Suspense fallback={null}>
    //       <Outlet />
    //     </Suspense>
    //     </div>

    // </>
    <>
      <div className={css.header}>
        <div className={css.container}>
          <NavLink to="rooms" className={css.navLink}>
            Rooms
          </NavLink>
          <NavLink to="prices" className={css.navLink}>
            Prices
          </NavLink>
          <NavLink to="map" className={css.navLink}>
            Map
          </NavLink>
          <NavLink to="contacts" className={css.navLink}>
            Contacts
          </NavLink>
        </div>
      </div>
      <div className={css.wrapper}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default Navigation;
