import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedContent(props) {
  const { content } = props;

  return (
    <a className="featured-talk-item" href={content.url} target="_blank">
      <Animation index={props.index}>
        <div className="featured-talk-container">
          <div className="featured-talk-item-left">
            <Image
              src={content.cover}
              alt={content.title}
              width="250"
              height="138"
            />
          </div>
          <div>
            <h3>{content.title}</h3>
            {content.artist && <p>with {content.artist}</p>}
            {content.organization && <p>{content.organization}</p>}
            <p>{content.where}</p>
            <p className="featured-talk-stats">View Now</p>
          </div>
        </div>
      </Animation>
    </a>
  );
}

function Animation(props) {
  const [hovered, setHovered] = useState("");
  const isHovered = hovered === props.index;

  return (
    <motion.div
      onHoverStart={() => setHovered(props.index)}
      onHoverEnd={() => setHovered("")}
      className="featured-talk-anim"
    >
      {isHovered && (
        <motion.div
          layoutId="featuredTalks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="featured-talk-anim-hovered"
        />
      )}

      {props.children}
    </motion.div>
  );
}
