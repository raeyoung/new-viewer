import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './components/NewsPage';

const App = () => {
  // category 뒤에 ? 는 선택적이라는 의미이다.
  // category URL 파라미터가 없다면 전체 카테고리를 선택한 것이다
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
