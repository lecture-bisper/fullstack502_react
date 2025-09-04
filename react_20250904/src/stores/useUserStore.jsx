/// useUserStore.jsx
/// Date: 25. 9. 4.
/// Time: 오전 9:44
/// User: it
/// 

import { create } from 'zustand';

const useUserStore = create(set => ({
  name: 'Guest',
  setupName: (newName) => set({name: newName}),
}));

export default useUserStore









