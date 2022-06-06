import { ImgHTMLAttributes } from 'react';

import styles from './styles.module.css'

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  hasBorder?: boolean;
}

export function Avatar(props: AvatarProps) {
  const { hasBorder = true, ...attrs } = props

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...attrs}
    />
  )
}