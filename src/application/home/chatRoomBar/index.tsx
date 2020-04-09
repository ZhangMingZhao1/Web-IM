import React from 'react';
import rightIcon from 'static/icon/chatIcon.png';
import './index.less';
interface IChatBarProps {
  chatBarItem: {
    avatar: string;
    name: string;
    lastChat: string;
  };
}
export default function(props: IChatBarProps) {
  const chatBarItem = props.chatBarItem;
  return (
    <div className="chatRoomBar">
      <div className="avatar">
        <img src={chatBarItem.avatar} alt="" />
      </div>
      <div className="midContent">
        <div className="name">{chatBarItem.name}</div>
        <div className="last">最后一条聊天记录</div>
      </div>
      <div className="chatIcon">
        <img src={rightIcon} alt="" />
      </div>
    </div>
  );
}
