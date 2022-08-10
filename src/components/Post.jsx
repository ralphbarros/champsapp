import styles from './Post.module.css'

export function Post() {
    return(
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/ralphbarros.png" />
                    <div className={styles.authorInfo}>
                        <strong> Ralph Marinho</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                    
                    
            <time title='11 de maio as 08:00' dateTime='2022-05-11 08:00'> Publicado ha 1h</time>
            </header>
            <div className={styles.content}>
                <p>Texto do P</p>
                <p>Texto do P2</p>
                <p><a href="www.etc"></a></p>
                <p><a href="com#"></a></p>
            </div>
        </article>
    )
}