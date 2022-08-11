import { Trash , ThumbsUp} from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/ralphbarros.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Ralph Marinho</strong>
                            <time title='11 de maio as 08:00' dateTime='2022-05-11 08:00'> Cerca de 1h</time>
                        </div>
                        <button title="Deletar Comentário">
                            <Trash size = {20} />
                        </button>
                    </header>
                    <p>Muito bom o comeco</p>
                </div>
                <footer>
                    <button>
                    <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}