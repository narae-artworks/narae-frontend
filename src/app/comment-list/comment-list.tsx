import classNames from 'classnames';
import styles from './comment-list.module.scss'
import Comment from './comment'

type CommentType = {
    id: string
    href: string,
    thumbnailSrc: string,
    name: string,
    comment: string,
}

type Prop = {
    comments: CommentType[],
    className?: string
};

export default function CommentList({ comments, className } : Prop) {
    return <ul className={classNames(styles.commentList, className)}>
        { 
            comments.map(i => <Comment
                id={i.id}
                href={i.href}
                thumbnailSrc={i.thumbnailSrc}
                name={i.name}
                comment={i.comment}
            ></Comment>)

        }
    </ul>
}