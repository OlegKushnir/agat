import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
const Home = lazy(() => import('./Home/Home'));
const RoomTypes = lazy(() => import('./Rooms/RoomTypes'));
const RoomCards = lazy(() => import('./Rooms/RoomCards'));
const Room = lazy(() => import('./Rooms/Room'));
const Prices = lazy(() => import('./Price/Prices'));
const Map = lazy(() => import('./Map/Map'));
const Contacts = lazy(() => import('./Contacts/Contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/rooms" element={<RoomTypes />} />
        <Route path="/rooms/:roomType" element={<RoomCards />} />
        <Route path="/rooms/:roomType/:roomId" element={<Room />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/map" element={<Map />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
};
