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
    description: (
      <>
        通讯录功能可以帮助你快速找到你需要的人，同时也能帮助你管理好你的好友关系。支持导出通讯录、删除好友、修改备注等功能。
      </>
    ),
  },
  {
    title: "群管理",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        群管理功能可以帮助你管理你的群组，包括创建、邀请、删除、修改群组信息、导出群成员信息、群列表信息等。
      </>
    ),
  },
  {
    title: "定时提醒",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        定时提醒功能可以帮助你安排好自己的日程，提醒自己及时完成任务。支持发送图片、语音、视频、文件等多种消息。
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
