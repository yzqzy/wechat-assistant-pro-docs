---
sidebar_position: 5
---

# 回调事件

通过自定义关键字、用户类型等配置，提供更丰富的功能扩展。

## 列表页

查看已配置的回调事件列表，可以编辑或删除已配置的回调事件。

<img src="/img/software_callback_event_01_mosaic.png" width="500" />

## 参数配置

配置回调事件的名称、关键字、用户类型、触发条件等参数。

<img src="/img/software_callback_event_02_mosaic.png" width="500" />

## 自定义回调地址

### 请求参数

```typescript
interface CallbackMesssagePayload {
  type: MessageType;
  id: string;

  filename?: string;
  text?: string;

  talkerId: string;
  listenerId?: string;

  roomId: string;
  mentionIdList?: string[]; // Mentioned Contacts' Ids

  timestamp: number;
}
```

```typescript
interface RunEventTaskProps {
  question: string;
  userId: string;
  isSelf: boolean;
  variables?: Record<string, string>;
  payload?: CallbackMesssagePayload;
}
```

> 注意：`CallbackMesssagePayload` 为 wechaty 标准消息类型。

### 响应参数

```typescript
interface RunEventTaskResponse {
  success: boolean;
  message: string;
}
```

### 消息类型说明

```typescript
enum MessageType {
  Unknown = 0,

  Attachment = 1, // Attach(6),
  Audio = 2, // Audio(1), Voice(34)
  Contact = 3, // ShareCard(42)
  ChatHistory = 4, // ChatHistory(19)
  Emoticon = 5, // Sticker: Emoticon(15), Emoticon(47)
  Image = 6, // Img(2), Image(3)
  Text = 7, // Text(1)
  Location = 8, // Location(48)
  MiniProgram = 9, // MiniProgram(33)
  GroupNote = 10, // GroupNote(53)
  Transfer = 11, // Transfers(2000)
  RedEnvelope = 12, // RedEnvelopes(2001)
  Recalled = 13, // Recalled(10002)
  Url = 14, // Url(5)
  Video = 15, // Video(4), Video(43)
  Post = 16, // Moment, Channel, Tweet, etc

  System = 18 // System Message
}
```

### 示例代码

以下是一个示例代码，使用 Express 框架实现回调地址。

```javascript
import express from 'express';
import dayjs from 'dayjs';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/user/subscribe', (req, res) => {
  console.log('-'.repeat(50))
  console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  console.log(req.body);

  res.json({
    success: true,
    message: 'ok'
  })
})

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});
```
