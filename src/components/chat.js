import React from 'react';
import '../assets/styles/chat.css';
import Avatar1 from '../assets/images/layer_9_copy.jpg';
import Avatar2 from '../assets/images/sk.jpg';
import TimeImage from '../assets/images/vector_smart_object.jpg';
import NoteImage from '../assets/images/notes_26.png';
import Message from './message';

const Chat = () =>
  <div className="chat">
    <div className="chat-header">
      <span>Mom's Discharge Plan</span>
    </div>
    <div className="content">
      <div className="chat-title">
        Starter Care Plan created + daily actions added
      </div>
      <Message
        color="blue"
        right
        sender="me"
        time="12:20p"
        avatar={Avatar1}
        shadow
      >
        <div className="acceptance">
          <div className="title">Daily grooming assistance</div>
          <div className="flex mb16">
            <div className="flex-none">
              <img className="icon-small" src={TimeImage} alt="" />
            </div>
            <div className="flex-1">
              <div>Dec 1</div>
              <div className="italic">Daily</div>
            </div>
          </div>
          <div className="flex mb16">
            <div className="flex-none">
              <img className="icon-small" src={NoteImage} alt="" />
            </div>
            <span>assist with daily grooming activities such as bathing, teeth, hair, dressing</span>
          </div>
          <button className="accept-button">accept</button>
        </div>
      </Message>
      <div className="date">
        Apr 1
      </div>
      <Message
        color="blue"
        sender="SK"
        time="11:59a"
        avatar={Avatar2}
      >
        I moved Karen’s knitting kit from the study upstairs to the the living room.
      </Message>
      <Message
        color="grey"
        sender="me"
        time="1:45p"
        avatar={Avatar1}
        right
      >
        That’s a good call. I’ll be stopping by later to have dinner with her. Pizza for everyone! Join us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a lorem enim. Praesent accumsan feugiat lorem et finibus. Vestibulum scelerisque id eros dignissim tincidunt. Morbi id tortor egestas, feugiat massa viverra, posuere nisl.
      </Message>
    </div>
  </div>

export default Chat;
