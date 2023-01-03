import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
const currentUsers = [
  {
    name: 'John',
    nickname: 'johnny',
    photo: 'john.jpg'
  },
  {
    name: 'Alice',
    nickname: 'alice1',
    photo: 'alice.jpg'
  }
];


test('view buttons can be clicked', () => {
  const setCurrentUser = jest.fn();

  render(
    <>
      {currentUsers?.map((user) => (
        <div key={`user-${user.nickname}`} className="user-card">
          <img alt="avatar" className="avatar" src={'foto/' + user.photo} />
          <div className="user-info">
            <span className="title">{user.name}</span>
            <span className="subtitle">{user.nickname}</span>
          </div>
          <button
            className="view-button"
            onClick={() => setCurrentUser(user)}
          >
            View
          </button>
        </div>
      ))}
    </>
  );

  const viewButtons = screen.getAllByText('View');
  viewButtons.forEach((viewButton, index) => {
    fireEvent.click(viewButton);
    expect(setCurrentUser).toHaveBeenCalledWith(currentUsers[index]);
  });
});