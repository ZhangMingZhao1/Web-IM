import React from 'react';

const root = window.document.body;

interface IAlertProps {
  data: {
    title: string;
    content: string;
    btn?: string;
    html?: any;
  };
}
export default function Alert(props: IAlertProps) {
  const wrap = document.createElement('div');
  const div = document.createElement('div');
  wrap.style.position = 'absolute';
  wrap.style.width = '100%';
  wrap.style.height = '100%';
  wrap.style.left = '0';
  wrap.style.top = '0';

  root.appendChild(wrap);
  wrap.appendChild(div);

  const { title, content, btn = '确定', html } = props.data;

  const close = () => {
    root.removeChild(wrap);
  };
  return (
    <div className="wind-alert">
      <div className="wind-alert-bg"></div>
      <div className="wind-alert-dialog animate-scale">
        <div className="wind-alert-title">{title}</div>
        <div v-if="content" className="wind-alert-content">
          {content}
        </div>
        {html && (
          <div
            className="wind-alert-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
        <div className="wind-alert-btn" onClick={close}>
          {btn}
        </div>
      </div>
    </div>
  );
}
