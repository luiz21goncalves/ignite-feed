import { Profile } from '../../types';

import { api } from '.';

export const getCurrentUserProfile = () =>
  api.get<Profile>('/me').then((response) => response.data);
