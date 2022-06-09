import { ReactNode } from 'react';

import styles from './styles.module.css';

type SkeletonProps = {
  children?: ReactNode;
};

export function SkeletonBox(props: SkeletonProps) {
  const { children } = props;
  return <div className={styles.skeletonBox}>{children || null}</div>;
}

export function SkeletonShimmer(props: SkeletonProps) {
  const { children } = props;
  return <div className={styles.skeletonShimmer}>{children || null}</div>;
}
