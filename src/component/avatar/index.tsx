import React from 'react';
import './index.less';
interface IAvatarProps {
  size: string;
  type?: string;
  src: string;
  className: string;
}
export default function Avatar(props: IAvatarProps) {
  const { size, type, src, className } = props;
  const avatarSzie = `w-avatar-${size || 'normal'}`;
  const avatarType = `w-avatar-${type || 'square'}`;
  return (
    <div>
      <div className={`w-avatar ${className}`}>
        <img src={src} alt="" className={`${avatarSzie} ${avatarType}`} />
      </div>
    </div>
  );
}
