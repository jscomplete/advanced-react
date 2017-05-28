import React from 'react';

import Article from './Article';

const ArticleList = (props) => {
  return (
    <div>
      {Object.values(props.articles).map(article =>
        <Article
          key={article.id}
          article={article}
        />
      )}
    </div>
  );
};

export default ArticleList;
