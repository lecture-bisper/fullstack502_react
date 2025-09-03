/// ThemeContext.jsx
/// Date: 25. 9. 3.
/// Time: 오후 2:16
/// User: it
/// 

import React from 'react'

//  외부에서 전역 변수로 사용할 수 있도록 Context 를 파일로 분리함
const ThemeContext = React.createContext('dark');
ThemeContext.displayName = '테마 컨텍스트';

export default ThemeContext









