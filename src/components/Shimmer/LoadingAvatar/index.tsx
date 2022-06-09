import { SkeletonShimmer } from '../../Skeleton';
import styles from './styles.module.css';

export function LoadingAvatar() {
  return (
    <div className={styles.container}>
      <SkeletonShimmer />
    </div>
  );
}
