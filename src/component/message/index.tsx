import React from 'react';
import Avatar from 'component/avatar';
import dateFormat from 'utils/date';
import { inHTMLData, uriInUnQuotedAttr } from 'utils/xss';
import { IMessageProps } from 'typings/type';
import './index.less';

export default function Message(props: IMessageProps) {
  const { isSelf, img, loading, isLast, msg } = props;
  const maxWidth = 200;
  const maxHeight = 200;

  const getdate = () => {
    return dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss');
  };
  const pic = () => {
    let pic = img;
    let width = 200;
    let height = 200;
    const picParse = /width=([0-9]+)&height=([0-9]+)/.exec(pic);
    if (picParse) {
      const natureWidth = +picParse[1];
      const naturehHeight = +picParse[2];
      let scale = 1;
      if (natureWidth * scale > maxWidth) {
        scale = maxWidth / natureWidth;
      }
      if (naturehHeight * scale > maxHeight) {
        scale = maxHeight / naturehHeight;
      }
      width = natureWidth * scale;
      height = naturehHeight * scale;
    }
    if (pic.indexOf('data:image') > -1) {
      return {
        src: pic.split('?')[0],
        width,
        height,
      };
    }
    if (pic.indexOf('?') > -1) {
      return {
        src: `${pic}&imageView2/2/w/360`,
        width,
        height,
      };
    } else {
      return {
        src: `${pic}?imageView2/2/w/360`,
        width,
        height,
      };
    }
  };

  const linkMsg = () => {
    // 防止xss
    const filterValue = inHTMLData(msg);
    return filterValue.replace(
      /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g,
      function($0: any) {
        const url = $0;
        return `<a style="color: #b374ff" href="${uriInUnQuotedAttr(
          url
        )}" target="_blank">${uriInUnQuotedAttr(url)}</a>`;
      }
    );
  };
  return (
    <div className={`clear ${isSelf ? 'right' : 'left'}`} ref="msg">
      <div className="name">
        <span v-if="mytime">{getdate}</span> &nbsp;&nbsp;{{ name }}
      </div>
      <div className="body">
        <div className="tip" v-if="isSelf">
          {/* <Status
          status="status"
          error="handleRetry">
        </Status> */}
        </div>
        <div className="item">
          <Avatar
            // onClick={handleClick}
            className="head-place"
            size="small"
            src="avatar"
            v-flex-touch="handleTouch"
          ></Avatar>
          {img && (
            <div>
              <div className="img-wrapper">
                <div className="img-bg" v-if="loading && loading !== 100">
                  {{ loading }}%
                </div>
                <img
                  v-imgSize={pic().src}
                  width={pic().width}
                  height={pic().height}
                  alt=""
                  data-item={isLast && 'last'}
                  className="img"
                  v-preview={img}
                  preview-title-enable="true"
                  preview-nav-enable="true"
                />
              </div>
            </div>
          )}
          {msg && (
            <span>
              <span dangerouslySetInnerHTML={linkMsg()} className="msg"></span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
