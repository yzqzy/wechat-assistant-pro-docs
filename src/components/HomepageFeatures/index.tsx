import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: '通讯录',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        通讯录功能可以帮助你查看、管理你的微信好友，包括查看好友信息、添加好友、删除好友、修改备注、发送消息等。
      </>
    )
  },
  {
    title: '群管理',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        群管理功能可以帮助你管理你的群组，例如查看群成员、群发消息、邀请好友入群、修改群名称、设置群公告等。
      </>
    )
  },
  {
    title: '定时提醒',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        定时提醒功能可以帮助你安排好自己的日程，提醒自己及时完成任务。支持发送图片、语音、视频、文件等多种消息。
      </>
    )
  }
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')} style={{ marginTop: '2rem' }}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
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
  )
}
