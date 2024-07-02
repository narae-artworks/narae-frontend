import classNames from 'classnames';
import styles from './notice-list.module.scss'
import Notice from './notice'

type NoticeType = {
    id: string,
    href: string,
    thumbnailSrc: string,
    header: string,
    title: string,
    description: string,
    date: string,
    className?: string
}

type Prop = {
    title: string,
    notices: NoticeType[],
    className?: string
};

export default function NoticeList({ title, notices, className } : Prop) {
    return <ul className={classNames(styles.noticeList, className)}>
        { 
            notices.map(i => <Notice
                key={i.id}
                href={`/other/notice/`}
                thumbnailSrc={i.thumbnailSrc}
                header={i.header}
                title={i.title}
                description={i.description}
                date={i.date}
            ></Notice>)

        }
    </ul>
}