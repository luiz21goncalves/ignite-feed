import { SkeletonBox, SkeletonShimmer } from '../../Skeleton';
import { LoadingAvatar } from '../LoadingAvatar';
import styles from './styles.module.css';

export function LoadingSidebar() {
  return (
    <div className={styles.container}>
      <SkeletonBox>
        <div className={styles.cover}>
          <SkeletonShimmer />
        </div>

        <div className={styles.avatar}>
          <LoadingAvatar />
        </div>

        <div className={styles.profileInfo}>
          <SkeletonShimmer />
          <SkeletonShimmer />
        </div>
      </SkeletonBox>
    </div>
  );
}
