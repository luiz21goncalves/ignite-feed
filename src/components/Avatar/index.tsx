import styles from './styles.module.css'

type AvatarProps = {
  src: string;
  alt?: string;
  hasBorder?: boolean;
}

export function Avatar(props: AvatarProps) {
  const { src, alt, hasBorder = true } = props

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  )
}