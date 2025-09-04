/// useThemeStore.jsx
/// Date: 25. 9. 4.
/// Time: 오전 9:44
/// User: it
/// 

import { create } from 'zustand';

//  커스텀 훅으로 생성
const useThemeStore = create(set => ({
  theme: 'primary',
  changeTheme: newTheme => set({theme: newTheme}),
}));

// const useThemeStore = create((set) => {
//   return ({
//     theme: 'primary',
//     changeTheme: (newTheme) => set({theme: newTheme}),
//   });
// });



export default useThemeStore;









