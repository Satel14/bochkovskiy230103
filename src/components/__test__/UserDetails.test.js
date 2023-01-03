import { render, screen,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

const user = {
  name: 'John',
  position: 'Manager',
  photo: 'john.jpg'
};

test('renders top block with user info', () => {
  render(
    <div className="top-block">
      <img alt="avatar" className="avatar" src={'foto/' + user.photo} />
      <span className="title">{user.name}</span>
      <span className="subtitle">{user.position}</span>
    </div>
  );

  const avatarElement = screen.getByAltText('avatar');
  const titleElement = screen.getByText(user.name);
  const subtitleElement = screen.getByText(user.position);

  expect(avatarElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(subtitleElement).toBeInTheDocument();
  expect(avatarElement).toHaveAttribute('src', 'foto/' + user.photo);
});

const onClose = jest.fn();

test('modal can be closed by clicking outside of it', () => {
  render(
    <div className="modal-wrapper" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        Modal Content
      </div>
    </div>
  );

  fireEvent.click(screen.getByText('Modal Content'));
  expect(onClose).not.toHaveBeenCalled();

  // eslint-disable-next-line testing-library/no-node-access
  fireEvent.click(screen.getByText('Modal Content').parentElement);
  expect(onClose).toHaveBeenCalled();
});
