import { ImgHTMLAttributes } from 'react';

import styles from './styles.module.css';

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  hasBorder?: boolean;
};

export function Avatar(props: AvatarProps) {
  const { hasBorder = true, alt, src, ...attrs } = props;

  return (
    <div className={hasBorder ? styles.containerWithBorder : styles.container}>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
        alt={alt}
        {...attrs}
      />
    </div>
  );
}
