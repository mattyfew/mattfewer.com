import React from "react";
import Head from "next/head";
import Link from "next/link";
import { AnimateSharedLayout } from "framer-motion";
import Main from "../layouts/Main";
import FeaturedContent from "../components/FeaturedContent";
import stripHtml from "../lib/strip-html";
import items from "../data/music";

export async function getStaticProps() {
  const meta = {
    title: "Music | Matt Fewer",
    tagline: "Music. Performance. Production.",
    image: "/static/images/the-monster-cover.jpg",
    gradientColor: "purple-cyan",
    selectionColor: "cyan"
  };

  return { props: meta };
}

function Music(props) {
  const renderFeatured = () => {
    const featured = [
      "The Monster (Eminem & Rihanna)",
      "Love Yourself (Justin Bieber)",
      "Crazy (Gnarles Barkley)"
    ];

    return items
      .map(year => {
        return year.videos.filter(video => featured.includes(video.title));
      })
      .reduce((acc, item) => {
        return acc.concat(item);
      }, [])
      .map((year, index) => {
        return <FeaturedContent key={index} content={year} />;
      });
  };

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <h3>{item.year}</h3>
          <p>{item.summary}</p>
          {item.videos.map((talk, tIndex) => {
            return <ContentItem key={tIndex} video={talk} />;
          })}
        </div>
      );
    });
  };

  const { title, image } = props;
  const description = `I've playing in many musical projects starting at my first high school band in 2005. I've had the pleasure of performing with many musicians in an array of genres spanning <strong>rock, post hardcore, metal, jazz, funk, golden oldies, pop, and more</strong>.`;

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://mattfewer.com/music" property="og:url" />
        <meta content={`https://mattfewer.com${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <p><Link href="/catalog">Click here to view my musical catalog.</Link></p>

        <h2>Featured Videos</h2>
        {/* ToDo: change things like the classNames */}
        <div className="featured-talks">{renderFeatured()}</div>

        <h2>Featured Tracks</h2>
        <div className="featured-talks">
          <iframe
            width="100%"
            height={166}
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1053119200&color=%239c7c64&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />

          <iframe
            width="100%"
            height={166}
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1010056609&color=%239c7c64&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </div>

        <h2>All Videos</h2>
        {renderAll()}
      </AnimateSharedLayout>
    </div>
  );
}

function ContentItem(props) {
  const { video } = props;

  return (
    <div>
      <h3>
        <a href={video.url} target="_blank">
          {video.title}
        </a>
      </h3>
      <ul>
        <li>
          <em>Artist:</em> {video.artist}
        </li>
        <li>
          <em>Where:</em> {video.where}
        </li>
      </ul>
    </div>
  );
}

Music.Layout = Main;

export default Music;
