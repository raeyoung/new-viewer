import React from 'react';
import styled from 'styled-components';

// 각 뉴스 정보를 보여주는 컴포넌트

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    marghin-top: 3rem;
  }
`;

/* noopener noreferrer
        noopener : window.opener 객체를 조작하지 못하도록 함.
        noreferrer : 다른 페이지를 탐색할 때 브라우저가 참조 웹페이지의 주소를 보내지 못하도록 함.
                     쉽게 말해 링크를 클릭할 때 참조자 정보를 숨긴다.
    */
const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
