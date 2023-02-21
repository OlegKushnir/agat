import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from 'components/Navigation';
const Home = lazy(() => import('./Home'));
const RoomTypes = lazy(() => import('./RoomTypes'));
const Rooms = lazy(() => import('./Rooms'));
const Room = lazy(() => import('./Room'));
const Prices = lazy(() => import('./Prices'));
const Map = lazy(() => import('./Map'));
const Contacts = lazy(() => import('./Contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/rooms" element={<RoomTypes />} />
        <Route path="/rooms/:roomType" element={<Rooms />} />
        <Route path="/rooms/:roomType/:roomId" element={<Room />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/map" element={<Map />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
};
