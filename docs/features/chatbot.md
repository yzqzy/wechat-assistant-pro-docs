---
sidebar_position: 3
---

# 智能对话

智能对话功能可以帮助您快速接入聊天机器人，提升用户体验。

## 机器人管理

### 列表页

机器人列表，显示已配置的机器人以及基本信息。

![图片](/img/software_chatbot_01_mosaic.png)

### 参数配置

支持选择 FastGPT、Dify、Coze、OpenAI 等平台，配置相关参数后即可使用对应的机器人。

可以按联系人、标签和群组设置不同的机器人，实现千人千面的个性化服务，满足多种场景需求。

![图片](/img/software_chatbot_02_mosaic.png)

<br />
<br />

![图片](/img/software_chatbot_03_mosaic.png)

<br />
<br />

![图片](/img/software_chatbot_05_mosaic.png)

## Prompt 管理

### 列表页

Prompt 列表，显示已配置的 Prompt，包括系统内置的 Prompt 及自定义的 Prompt。

**系统内置的 Prompt 无法修改、删除，只能查看。**

![图片](/img/software_chatbot_06_mosaic.png)

### 参数配置

![图片](/img/software_chatbot_07_mosaic.png)

## 自定义对话模型

支持通过回调地址方式接入自定义对话模型，灵活应对多样化的业务需求。

### 回调地址配置

回调地址：[Your API Host]/chat/completions

请求方法：POST

请求头：

```
Content-Type: application/json
Authorization: Bearer [Your API Key]
```

请求参数：

```typescript
type MessagePayload = {
  type: MessageType;
  id: string;

  filename?: string;
  text?: string;

  talkerId: string;
  listenerId?: string;

  roomId: string;
  mentionIdList?: string[]; // Mentioned Contacts' Ids

  timestamp: number;
};

interface ChatProps extends BaseChatProps {
  chatId?: string;
  userId: string;
  stream?: string;
  variables?: Record<string, string>;
  question: string;
  payload?: MessagePayload;
}
```

> 注意：`MessagePayload` 为 wechaty 标准消息类型。

响应参数：

```typescript
interface ChatResponse {
  success: boolean;
  message: string;
  data: {
    chatId: string;
    messageId: string;
    content: string;
  };
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

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.post('/chat/completions', (req, res) => {
  console.log(req.body);

  setTimeout(() => {
    res.json({
      success: false,
      message: 'ok',
      data: {
        chatId: 'chat-id-123',
        messageId: 'message-id-456',
        content: '你好，我是 wxbot 机器人，很高兴为您服务。'
      }
    })
  }, 5 * 1000)
})

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});
```

## 聊天记录

### 列表页

聊天记录列表，显示消息列表，支持按时间段、机器人、用户类型筛选，支持导出对话记录。

![图片](/img/software_chat_history_01_mosaic.png)

### 聊天详情

聊天详情页，显示单条聊天记录的详细信息。

![图片](/img/software_chat_history_02_mosaic.png)
