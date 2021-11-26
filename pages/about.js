import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Main from '../layouts/Main'
import stripHtml from '../lib/strip-html'
import career from '../data/about'
import videos from '../data/videos'
import FeaturedContent from '../components/FeaturedContent'

export async function getStaticProps() {
  const meta = {
    title: 'About | Matt Fewer',
    description: "<p><strong>Hey, I'm Matt Fewer.</strong> I’m a software engineer and musician currently based in Berlin.</p><p>I'm currently a <strong>Senior Software Developer</strong> at Just Eat Takeaway.com. Before that, I was a programming teacher at SPICED Academy.</p><p>As a musician, performer, and music producer. I’ve worked with many original and cover acts throughout the New York, where I grew up.</p><p>When I’m not working, I enjoy snowboarding, reading, exercising, and lazing around with my wife and 2 cats.</p>",
    tagline: 'Create. Learn. Share.',
    image: '/static/images/matt-fewer-lilienstein.jpg',
    gradientColor: 'pink-purple',
    selectionColor: 'pink'
  }

  return { props: meta }
}

function About(props) {
  const { title, description, image } = props

  const renderIntro = () => {
    return <div className="about">
      <div className="about-section">
        <Image
          alt="Matt"
          src="/static/images/matt-fewer-suit.JPG"
          width="336"
          height="336"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
          priority
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="about-section"
      />
    </div>
  }

  const renderFeatured = () => {
    const featured = [
      "Designing APIs for 150 Million Orders",
      "From Musician to Software Developer",
    ];

    return videos
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
    return career.map((item, index) => {
      return <div style={{ marginBottom: 40 }} key={index}>
        <h3>{item.jobTitle}</h3>
        <p style={{ margin: 0 }}>
          <a href={item.companyUrl} target="_blank">{item.company}</a>
          <span> • {item.location}</span>
        </p>
        <p style={{ margin: 0 }}>
          <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
          <span> – </span>
          <span>{item.endDate ? format(parseISO(item.endDate), 'LLL yyyy') : 'Present'}</span>
          <span> • </span>
          <span>{getDuration(item.startDate, item.endDate)}</span>
        </p>
      </div>
    })
  }

  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date()
    })

    let durationStr = ''

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `
    }
    else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `
    }

    durationStr += `${durationObj.months} mos`

    return durationStr
  }

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://mattfewer.com/About" property="og:url" />
        <meta content={`https://mattfewer.com${image}`} property="og:image" />
      </Head>

      {renderIntro()}

      <h2>Featured Videos</h2>
      {/* ToDo: change things like the classNames */}
      <div className="featured-talks">{renderFeatured()}</div>

      <h2>Career</h2>
      {renderAll()}
    </div>
  )
}

About.Layout = Main

export default About