import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  href?: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "通讯录",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    href: "/docs/features/contact",
    description: <>帮助您查看、管理和整理微信好友。</>,
  },
  {
    title: "群管理",
    href: "/docs/features/room",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>帮助您轻松管理群组</>,
  },
  {
    title: "定时提醒",
    href: "/docs/features/scheduler",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>帮助您安排日程并及时完成任务。</>,
  },
  {
    title: "智能对话",
    href: "/docs/features/chatbot",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        帮助您接入 AI 机器人，实现个性化体验，支持 FastGPT、Dify、Coze、OpenAI
        等多个平台。
      </>
    ),
  },
  {
    title: "群发助手",
    href: "/docs/features/message_broadcast",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>帮助您群发消息，支持文本、图片、文件、音频、视频等多种消息类型。</>
    ),
  },
  {
    title: "高级功能",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        更多高级功能正在开发中，敬请期待，包括多群消息同步、RSS
        订阅推送、转发助手等。
      </>
    ),
  },
];

function Feature({ title, href, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")} style={{ marginTop: "2rem" }}>
      <div
        className="text--center padding-horiz--md"
        style={{ cursor: href ? "pointer" : "default" }}
        onClick={() => {
          if (!href) return;
          window.location.href = href;
        }}
      >
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
