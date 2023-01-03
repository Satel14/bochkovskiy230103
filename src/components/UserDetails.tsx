import User from '../types/types';
import './userdetails.css'
interface Props {
  user: User;
  onClose: () => void;
}

export default function UserDetails({ user, onClose }: Props): JSX.Element {
  return (
    <div className="modal-wrapper" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img
          alt="close"
          onClick={onClose}
          className="close-icon"
          src="close-button.svg"
        />
        <div className="top-block">
          <img alt="avatar" className="avatar" src={'foto/' + user.photo} />
          <span className="title">{user.name}</span>
          <span className="subtitle">{user.position}</span>
        </div>
        <div className="bottom-block">
          <div className="info-block">
            <span className="info-label">Phone</span>
            <span className="info-value">{user.phone}</span>
          </div>
          <div className="info-block">
            <span className="info-label">URL</span>
            <a href="https://example.com" className="info-link">
              https://example.com
            </a>
          </div>
          <div className="info-block">
            <span className="info-label">Email</span>
            <a href={`mailto:${user.email}`} className="info-link">
              {user.email}
            </a>
          </div>
          <button className="send-message-button">Send message</button>
        </div>
      </div>
    </div>
  );
}
