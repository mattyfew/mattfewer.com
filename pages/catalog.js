import React from "react";
import Head from "next/head";
import {AnimateSharedLayout} from "framer-motion";
import Main from "../layouts/Main";
import stripHtml from "../lib/strip-html";
import catalog from '../data/catalog'

export async function getStaticProps() {
  const meta = {
    title: "Catalog | Matt Fewer",
    tagline: "Rock. Pop. Classics.",
    image: "/static/images/the-monster-cover.jpg",
    gradientColor: "purple-cyan",
    selectionColor: "cyan"
  };

  return {props: meta};
}

function Catalog(props) {
  const renderAll = () => {
    return catalog.map((artist, index) => {
      return (
        <div>
          <h3>
            {artist.artist}
          </h3>
          <ul>
            {artist.songs.map((title) => {
              return <li>{title}</li>;
            })}
          </ul>
        </div>
      );
    });
  };

  const {title, image} = props;
  const description = `Check out my musical catalog. All songs are performed on <strong>guitar</strong> or <strong>bass</strong>.`;

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title"/>
        <meta content={stripHtml(description)} name="description"/>
        <meta content={stripHtml(description)} property="og:description"/>
        <meta content="https://mattfewer.com/catalog" property="og:url"/>
        <meta content={`https://mattfewer.com${image}`} property="og:image"/>
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{__html: description}}/>

        <h2>My Catalog of Songs</h2>
        {renderAll()}
      </AnimateSharedLayout>
    </div>
  );
}

Catalog.Layout = Main;

export default Catalog;
