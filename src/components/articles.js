import React from "react"  
import Card from "./card"

const Articles = ({ articles }) => {  
  const leftArticlesCount = Math.ceil(articles.length / 3);
  const rightAritclesCount = articles.length - leftArticlesCount;
  const leftArticles = articles.slice(0, leftArticlesCount);
  const centerArticles = articles.slice(leftArticlesCount, rightAritclesCount);
  const rightArticles = articles.slice(rightAritclesCount, articles.length);

  return (
    <div>
      <div class="uk-child-width-expand@s uk-text-center" data-uk-grid="parallax: 150" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100;">
        <div>  
          {leftArticles.map((article, index) => {
            return (
              <div class="uk-card uk-card-muted uk-card-body uk-grid-margin uk-padding-small">
                <Card article={article} key={`article__${article.node.id}`}/>
              </div>
            );
          })}
        </div>

        <div>
          {centerArticles.map((article, index) => {
            return (
              <div class="uk-card uk-card-muted uk-card-body uk-grid-margin uk-padding-small">
                <Card article={article} key={`article__${article.node.id}`}/>
              </div>
            );
          })}
        </div>
        
        <div>
          {rightArticles.map((article, index) => {
            return (
              <div class="uk-card uk-card-muted uk-card-body uk-grid-margin uk-padding-small">
                <Card article={article} key={`article__${article.node.id}`}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Articles