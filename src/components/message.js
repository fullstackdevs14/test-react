import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import '../assets/styles/message.css';

const Message = ({
  color,
  right,
  children,
  sender,
  time,
  avatar,
  shadow
}) =>
  <div className={cx('message', { right })}>
    {!right &&
      <div className="avatar">
        <img src={avatar} alt="avatar"/>
      </div>
    }
    <div className="msg-content">
      <div className={cx('bubble', color, { right })}>
        {shadow && <div className="shadow"/>}
        <div className="bubble-content">
          {children}
        </div>
      </div>
      <div className="message-meta">
        <span className="sender">{sender}</span>
        <span className="time">{time}</span>
      </div>
    </div>
    {right &&
      <div className="avatar">
        <img src={avatar} alt="avatar"/>
      </div>
    }
  </div>

Message.propTypes = {
  color: PropTypes.string,
  right: PropTypes.bool,
  children: PropTypes.any.isRequired,
  sender: PropTypes.string,
  time: PropTypes.string,
  avatar: PropTypes.string
}

Message.defaultProps = {
  color: '',
  right: false,
  sender: '',
  time: '',
  avatar: ''
}

export default Message;
