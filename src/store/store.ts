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
  @observable emojiShow = false;
  @action.bound setMessageInfo(messageInfo: IMessageProps, roomid: string) {
    if (this.roomdetail[roomid]) {
      this.roomdetail[roomid].push(messageInfo);
    } else {
      this.roomdetail[roomid] = [];
      this.roomdetail[roomid].push(messageInfo);
    }
  }
  @action.bound setEmoji(value: boolean) {
    this.emojiShow = value;
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
