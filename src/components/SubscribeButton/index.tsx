import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

function SubscribeButton(props: SubscribeButtonProps) {

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
