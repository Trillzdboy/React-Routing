import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewUserWelcome from './NewUserWelcome';

const welcome = () => {
  return (
    <>
      <h1>The Welcome Page</h1>
      <Routes>
        <Route path="new-user" element={<NewUserWelcome />} />
      </Routes>
    </>
  );
};

export default welcome;
