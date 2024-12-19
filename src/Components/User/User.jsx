import React from 'react';
import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <div className="container">
      <UserHeader />
      <Routes>
        <Route
          path="/"
          element={
            <Feed
              user={data.id}
              title="My account"
              description="Your account page."
            />
          }
        />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default User;
