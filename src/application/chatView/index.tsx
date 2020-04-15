import React, { useRef, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { inHTMLData } from 'utils/xss';
import Message from 'component/message';
import MessageList from 'application/messageList';
import Alert from 'component/alert';
import emoji from 'utils/emoji';
import { queryString } from 'utils/utils';
import MessageStore from 'store/store';
import socket from 'websocket/socket';
import 'static/iconfonts/iconfont.css';
import './index.less';
import { values } from 'mobx';

export default function ChatView() {
  const [chatValue, setchatValue] = useState('');
  const [alertFlag, setalertFlag] = useState<boolean>(false);
  const [userName, setuserName] = useState('');

  const roomId = queryString(window.location.href, 'roomId');
  const roomType = queryString(window.location.href, 'type');
  const to = queryString(window.location.href, 'to');
  const from = queryString(window.location.href, 'from');
  const friendName = queryString(window.location.href, 'friendName');

  const myMessageStore = React.useContext(MessageStore);

  const emojiDom = useRef(null);
  useEffect(() => {
    bindEmojiClick();
    return () => {
      console.log('remove bindEmojiClick');
      const cur: any = emojiDom.current;
      if (cur) {
        cur.removeEventListener('click', handle);
      }
    };
  });
  const goback = () => {};
  const openSimpleDialog = () => {};
  const imgupload = () => {};
  const handleTips = () => {};
  const handleGithub = () => {};
  const chatInputChange = (value: any) => {
    console.log('chatInputChange', value);
    setchatValue(value);
  };
  const submess = () => {
    if (chatValue !== '') {
      if (chatValue.length > 200) {
        alert('请输入100字以内');
      }

      const msg = inHTMLData(chatValue);

      // if (store) {
      //   let userName = (store as any).username;
      //   setuserName(userName);
      // }

      const { userid, src } = myMessageStore.userInfo;
      const obj: any = {
        username: userid,
        src: src,
        img: ``,
        msg,
        to: to,
        from: from,
        roomType: roomType,
        roomid: roomId,
        time: new Date(),
        type: 'text',
        clientId: uuid(),
      };
      // 保存消息
      myMessageStore.setMessageInfo(obj, roomId);
      socket.emit('message', obj);
      setchatValue('');
    } else {
      alert('发送内容不能为空');
    }
  };

  const fileup = () => {};
  const handle = (e: any) => {
    console.log('handle');
    let target = e.target || e.srcElement;
    if (!!target && target.tagName.toLowerCase() === 'span') {
      setchatValue(chatValue + target.innerHTML);
    }
    e.stopPropagation();
  };
  const bindEmojiClick = () => {
    console.log('bindEmojiClick');
    if (emojiDom) {
      (emojiDom as any).current.addEventListener('click', handle);
    }
  };

  return (
    <div className="container">
      <div className="title">
        <div color="primary">
          <div slot="left" onClick={goback}>
            <div>返回</div>
          </div>
          <div className="center">
            <div>中间名字</div>
          </div>
          <div onClick={openSimpleDialog}>
            <div>人图标</div>
          </div>
          <div v-else slot="right"></div>
        </div>
      </div>
      <div className="chat-inner">
        <div className="chat-container">
          <div>暂无消息,赶紧来占个沙发～</div>
          <div className="chat-loading">
            <div className="lds-css ng-scope">
              <div className="lds-rolling">
                <div></div>
              </div>
            </div>
          </div>
          <div>到顶啦~</div>

          {MessageList}
          <div className="clear"></div>
        </div>
      </div>
      <div className="bottom">
        <div className="functions">
          <div className="fun-li" onClick={imgupload}>
            <i className="iconfont icon-xiangji"></i>
          </div>

          <div className="fun-li emoji">
            <i className="iconfont icon-smile"></i>
            <div className="emoji-content" v-show="getEmoji">
              <div className="emoji-tabs">
                <div className="emoji-container" ref={emojiDom}>
                  <div
                    className="emoji-block"
                    style={{
                      width: Math.ceil(emoji.people.length / 5) * 48 + 'px',
                    }}
                  >
                    {emoji.people.map((item, index) => {
                      return <span key={item}>{item}</span>;
                    })}
                  </div>
                  <div
                    className="emoji-block"
                    style={{
                      width: Math.ceil(emoji.nature.length / 5) * 48 + 'px',
                    }}
                  >
                    {emoji.nature.map((item, index) => {
                      return <span key={item}>{item}</span>;
                    })}
                  </div>
                  <div
                    className="emoji-block"
                    style={{
                      width: Math.ceil(emoji.items.length / 5) * 48 + 'px',
                    }}
                  >
                    {emoji.items.map((item, index) => {
                      return <span key={item}>{item}</span>;
                    })}
                  </div>
                  <div
                    className="emoji-block"
                    style={{
                      width: Math.ceil(emoji.place.length / 5) * 48 + 'px',
                    }}
                  >
                    {emoji.place.map((item, index) => {
                      return <span key={item}>{item}</span>;
                    })}
                  </div>
                  <div
                    className="emoji-block"
                    style={{
                      width: Math.ceil(emoji.single.length / 5) * 48 + 'px',
                    }}
                  >
                    {emoji.single.map((item, index) => {
                      return <span key={item}>{item}</span>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fun-li" onClick={handleTips}>
            <i className="icon iconfont icon-zanshang"></i>
          </div>
          <div className="fun-li" onClick={handleGithub}>
            <i className="icon iconfont icon-wenti"></i>
          </div>
        </div>
        <div className="chat">
          <div className="input">
            <input type="text" value={chatValue} onChange={chatInputChange} />
          </div>
          <button
            className="demo-raised-button"
            color="primary"
            onClick={submess}
          >
            发送
          </button>
        </div>
        <input
          id="inputFile"
          name="inputFile"
          type="file"
          multiple={true}
          accept="image/gif,image/jpeg,image/png,image/webp,image/jpg;capture=camera"
          style={{ display: 'none' }}
          onChange={fileup}
        />
      </div>
    </div>
  );
}
