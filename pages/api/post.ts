import {getAllArticles} from "../../utils/markdown";

export default async function handler(req, res) {
  const {page} = req.query;

  const articles = await getAllArticles(page);

  articles
    .map((post) => {
      return {
        ...post,
        published: new Date(post.published),
      }
    })
    .sort((a, b) => b.published - a.published);
  
  console.log('DEBUG :: articles', articles);

  // const posts = articles.map((post) => {
  //   return {
  //     ...post,
  //     published: post.published,
  //   };
  // });

  res.status(200).json(articles);
}
