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
  console.log('roomdetailArr', roomdetailArr);
  const MessageList = roomdetailArr.map((obj, index) => {
    return (
      <Message
        avatarClick={handleInfo}
        flexTouch={hadnleTouch}
        retry={handleRetry}
        // 这里的列表不会做移动和删除操作，所以这里的index做key其实没影响
        key={index}
        isSelf={obj.username === username}
        // id={index}
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
