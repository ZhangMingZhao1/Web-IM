import React from 'react';
import { Link } from 'react-router-dom';
import ChatRoomBar from './chatRoomBar';
import chatbar1 from 'static/icon/chatbar1.png';
import chatbar2 from 'static/icon/chatbar2.png';

function Home() {
  return (
    <div>
      <Link to="/chatRoom/1">
        <ChatRoomBar
          chatBarItem={{
            avatar: chatbar1,
            name: '聊天室1',
            lastChat: 'aaa:xxx',
          }}
        />
      </Link>
    </div>
  );
}

export default Home;
