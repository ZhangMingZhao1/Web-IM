import React from 'react';
import { observable } from 'mobx';
import Message from 'component/message';
import MessageStore from 'store/store';
import './index.less';
interface IMessageListProps {
  roomid: string;
}
export default function MessageList(props: IMessageListProps) {
  const { roomid } = props;
  const myMessageStore = React.useContext(MessageStore);
  const handleInfo = () => {};
  const hadnleTouch = () => {};
  const handleRetry = () => {};
  const container = {};
  const username = '';
  const roomdetail = myMessageStore.roomdetail;
  const MessageList = roomdetail[roomid].map((obj, index) => {
    return (
      <Message
        avatarClick={handleInfo}
        flexTouch={hadnleTouch}
        retry={handleRetry}
        key={obj.id}
        isSelf={obj.username === username}
        id={obj.id}
        username={obj.username}
        head={obj.src}
        msg={obj.msg}
        clientId={obj.clientId}
        roomid={obj.roomid}
        img={obj.img}
        loading={obj.loading}
        status={obj.status}
        mytime={obj.time}
        obj={obj}
        container={container}
        isLast={roomdetail[roomid].length - 1 === index}
      />
    );
  });
  return MessageList;
}
