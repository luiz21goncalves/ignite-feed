import styles from './styles.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/luiz21goncalves.png" 
            alt="Avatar de Luiz Gonçalves"
          />
          <div className={styles.authorInfo}>
            <strong>Luiz Gonçalves</strong>
            <span>Desenvolvedor Web</span>
          </div>
        </div>

        <time 
          title="21 de Fevereiro de 2022 ás 15:45h" 
          dateTime="2022-02-21 15:45:00"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  )
}