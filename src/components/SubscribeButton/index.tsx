import styles from './styles.module.scss'

function SubscribeButton() {

  return (
    <button
      type="submit"
      className={styles.subscribeButton}
    >
      Subscribe now ✨
    </button>
  )
}

export { SubscribeButton }
