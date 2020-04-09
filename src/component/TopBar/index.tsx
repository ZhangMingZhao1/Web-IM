import React from 'react';
import './index.less';
interface ITopBarProps {
  data: {
    name: string;
  };
}
export default function TopBar(props: ITopBarProps) {
  const { data } = props;
  return <div className="TopBar">{data.name}</div>;
}
