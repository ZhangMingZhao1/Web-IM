import React from 'react';
import { observable } from 'mobx';
import Message from 'component/message';
import MessageStore from 'store/store';
import './index.less';
interface IMessageListProps {
  roomId: string;
}
export default function MessageList(props: IMessageListProps) {
  const { roomId } = props;
  const myMessageStore = React.useContext(MessageStore);
  const handleInfo = () => {};
  const hadnleTouch = () => {};
  const handleRetry = () => {};
  const container = {};
  const username = '';
  const roomdetailArr = myMessageStore.roomdetail[roomId] || [];

  const MessageList = roomdetailArr.map((obj, index) => {
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
        isLast={roomdetailArr.length - 1 === index}
      />
    );
  });
  console.log(MessageList);
  return <>{MessageList}</>;
}
