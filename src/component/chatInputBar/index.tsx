import React, { useRef, useEffect, useState } from 'react';
import emoji from 'utils/emoji';
import 'static/iconfonts/iconfont.css';
import './index.less';

export default function ChatInputBar() {
  const [chatValue, setchatValue] = useState('');
  const emojiDom = useRef(null);
  useEffect(() => {
    bindEmojiClick();
  }, []);
  const imgupload = () => {};
  const handleTips = () => {};
  const handleGithub = () => {};
  const submess = () => {};
  const fileup = () => {};

  const bindEmojiClick = () => {
    if (emojiDom) {
      (emojiDom as any).current.addEventListener('click', (e: any) => {
        let target = e.target || e.srcElement;
        if (!!target && target.tagName.toLowerCase() === 'span') {
          setchatValue(chatValue + target.innerHTML);
        }
        e.stopPropagation();
      });
    }
  };
  return (
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
          <input type="text" />
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
  );
}
