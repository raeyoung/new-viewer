import React from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const NewsPage = ({ match }) => {
  // 카테고리가 선택되지 않았을 경우 기본값은 all 로 적용하기
  const category = match.params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
