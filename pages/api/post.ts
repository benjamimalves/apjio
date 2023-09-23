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

  const posts = articles.map((post) => {
    return {
      ...post,
      published: post.published.toDateString(),
    };
  });

  res.status(200).json(posts);
}
