import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "通讯录",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>通讯录功能可以帮助你查看、管理你的微信好友。</>,
  },
  {
    title: "标签管理",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>标签管理功能可以帮助你整理、分类你的微信好友。</>,
  },
  {
    title: "群管理",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>群管理功能可以帮助你管理你的群组，</>,
  },
  {
    title: "定时提醒",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>定时提醒功能可以帮助你安排好自己的日程，提醒自己及时完成任务。</>
    ),
  },
  {
    title: "智能对话",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        智能对话功能可以帮助你轻松接入 AI 机器人，实现千人千面。已支持
        fastgpt、dify、openai 等多平台。
      </>
    ),
  },
  {
    title: "高级功能",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        更多高级功能正在陆续开发中，敬请期待（多群消息同步、RSS
        订阅推送、转发助手、群发助手 等）。
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")} style={{ marginTop: "2rem" }}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
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
