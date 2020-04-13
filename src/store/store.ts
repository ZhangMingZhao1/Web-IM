import { createContext } from 'react';
import { observable, action, computed } from 'mobx';
import { IMessageProps } from 'typings/type';
// import request from "@/services/newRequest";

interface looseObj {
  [key: string]: IMessageProps[];
}

class MessageStore {
  @observable roomdetail: looseObj = {};
  @observable userInfo = {
    userid: '卢本伟',
    src: 'src',
    id: 'id',
    token: 'token',
  };

  @action.bound setMessageInfo(messageInfo: IMessageProps, roomid: string) {
    this.roomdetail[roomid].push(messageInfo);
  }

  // 列表数据
  // @action.bound
  // async qryTableDate(page = 1, size = 10) {
  //   this.loading = true;
  //   const res = await request({
  //     url: "/list",
  //     method: "post",
  //     data: { page, size }
  //   });

  //   if (res.success) {
  //     const resData = res.data || {};
  //     console.log(resData);
  //   }
  //   this.loading = false;
  // }
}

export default createContext(new MessageStore());
