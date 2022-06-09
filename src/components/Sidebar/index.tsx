import { PencilSimpleLine } from 'phosphor-react';
import { useQuery } from 'react-query';

import { getCurrentUserProfile } from '../../services/api/profile';
import { Avatar } from '../Avatar';
import { LoadingSidebar } from '../Shimmer/LoadingSidebar';
import styles from './styles.module.css';

export function Sidebar() {
  const { data: profile, isLoading } = useQuery('me', getCurrentUserProfile);

  if (isLoading) {
    return <LoadingSidebar />;
  }

  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={profile?.coverUrl} alt="Cover" />

      <div className={styles.profile}>
        <Avatar src={profile?.avatarUrl} alt={`Avatar de ${profile?.name}`} />
        <strong>{profile?.name}</strong>
        <span>{profile?.role}</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
