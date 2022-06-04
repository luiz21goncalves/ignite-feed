import styles from './styles.module.css'

export function Avatar(props) {
  const { src, alt, hasBorder = true } = props

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  )
}