import styles from './styles.module.scss'

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>blog.zada</h1>
        <nav>
          <a href="" className={styles.active}>Home</a>
          <a href="">Posts</a>
        </nav>
      </div>
    </header>
  )
}

export { Header };