import { SkeletonBox, SkeletonShimmer } from '../../Skeleton';
import { LoadingAvatar } from '../LoadingAvatar';
import styles from './styles.module.css';

export function LoadingPost() {
  return (
    <div className={styles.container}>
      <SkeletonBox>
        <div className={styles.header}>
          <div className={styles.profile}>
            <LoadingAvatar />

            <div className={styles.profileInfo}>
              <SkeletonShimmer />
              <SkeletonShimmer />
            </div>
          </div>

          <SkeletonShimmer />
        </div>

        <div className={styles.postContent}>
          <SkeletonShimmer />
          <SkeletonShimmer />
          <SkeletonShimmer />
        </div>

        <div className={styles.postContent}>
          <SkeletonShimmer />
          <SkeletonShimmer />
          <SkeletonShimmer />
        </div>
      </SkeletonBox>
    </div>
  );
}
