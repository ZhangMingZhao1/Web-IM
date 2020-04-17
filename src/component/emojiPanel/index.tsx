import React, { useRef, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import emoji from 'utils/emoji';
import MessageStore from 'store/store';
import './index.less';
export default observer(function EmojiPanel(props: { handle: any }) {
  const myMessageStore = React.useContext(MessageStore);
  const emojiDom = useRef(null);
  const isEmojiShow = myMessageStore.getEmoji;
  const { handle } = props;
  const bindEmojiClick = () => {
    // console.log('bindEmojiClick');
    const cur = emojiDom.current;
    if (cur) {
      (emojiDom as any).current.addEventListener('click', handle);
    }
  };
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
  console.log('emojiPanel', isEmojiShow);
  return isEmojiShow ? (
    <div className="emoji-content">
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
  ) : null;
});
