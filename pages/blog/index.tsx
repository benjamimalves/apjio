import React, { useState } from "react";
import { getAllArticles } from "../../utils/markdown";
import Parallax from "../../components/Parallax/Parallax";
import Head from "next/head";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/jss/nextjs-material-kit/pages/components";
import classNames from "classnames";
import BlogCard from "../../components/Blog/BlogCard";
import Button from "../../components/CustomButtons/Button";

const useStyles = makeStyles(styles);

type PostType = {
  title: string;
  description: string;
  published: string;
  image_url: string;
  slug: string;
};

export default function BlogPage(props: { posts: PostType[] }) {
  const classes = useStyles();
  const frontMatter = {
    title: "Blog",
    og_url: "https://www.apjio.pt/blog",
    og_description: "Siga todas as novidades da APJIO.",
    og_image_url: "https://www.apjio.pt/img/hero/eventos.jpg"
  }

  const { posts } = props;

  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const loadMorePosts = async () => {
    const res = await fetch(`/api/post?page=${currentPageIndex + 1}`); // absolute url is supported here
    const posts = await res.json();

    setFilteredPosts((_posts) => [..._posts, ...posts]);
    setCurrentPageIndex((_pageIndex) => _pageIndex + 1);
  };

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{`APJIO | ${frontMatter.title}`}</title>
        <meta property="og:site_name" content={`APJIO | ${frontMatter.title}`} />
        <meta property="og:url" content={frontMatter.og_url} />
        <meta property="og:description" content={frontMatter.og_description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={frontMatter.og_image_url} />
      </Head>
      <Parallax small image="/img/hero/eventos.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Blog</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer alignItems="center" justifyContent="center">
          <GridItem xs={11} sm={6} >
            <div>
              {filteredPosts.map((post, index) => (
                <BlogCard post={post} key={index} />
              ))}
            </div>
            <div className={classes.textCenter}>
              <Button onClick={loadMorePosts} size="md" color="info">
                Ver mais
              </Button>
            </div>
            <br/>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const articles: PostType[] = await getAllArticles();

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
      published: new Date(post.published).toDateString(),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
