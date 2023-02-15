import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from 'components/Navigation';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchCurrentUser } from 'redux/operations/operations';
// import PrivateRoute from 'components/PrivateRoute';
// import PublicRoute from 'components/PublicRoute';
// import { getIsFetchingCurrent } from 'redux/store';
// const Navigation = lazy(() => import('../Navigation/Navigation'));
const Rooms = lazy(() => import('./Rooms'));
const Prices = lazy(() => import('./Prices'));
const Map = lazy(() => import('./Map'));
const Contacts = lazy(() => import('./Contacts'));
export const App = () => {
  return (
    
    
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            index
            path="/rooms"
            element={
              // <PublicRoute restricted redirectTo="/contacts">
                <Rooms />
              // </PublicRoute>
            }
          />
          <Route
            path="/prices"
            element={
              // <PublicRoute restricted>
                <Prices />
              // </PublicRoute>
            }
          />
          <Route
            path="/map"
            element={
              // <PublicRoute restricted redirectTo="/contacts">
                <Map />
              // </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              // <PrivateRoute>
                <Contacts />
              // </PrivateRoute>
            }
          />
        </Route>
      </Routes>

     
  );
};
