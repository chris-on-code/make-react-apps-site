import React from 'react'
import LazyLoad from 'react-lazyload'
import './WhatWellBuild.css'

export const seriesAApps = [
  {
    title: 'Pomodoro Timer',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352061/01_-_pomodoro_uwan1y.mp4',
    numberOfVideos: 3,
    timeToComplete: '26 minutes',
    demoLink: 'https://r36qd.codesandbox.io/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-a/348620-01-pomodoro/992082-00-pomodoro-preview',
  },
  {
    title: 'Markdown Editor',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352061/02_-_markdown_editor_sqfqzz.mp4',
    numberOfVideos: 2,
    timeToComplete: '17 minutes',
    demoLink: 'https://391jg.codesandbox.io/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-a/348621-02-markdown-editor/992079-00-markdown-editor-preview',
  },
  {
    title: 'Browser Tabs and Routing',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352063/03_-_browser_tabs_rshfqe.mp4',
    numberOfVideos: 4,
    timeToComplete: '43 minutes',
    demoLink: 'https://yyhfg.codesandbox.io/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-a/348622-03-highlight-tabs/992072-00-browser-tabs-preview',
  },
  {
    title: 'Paper Rock Scissors',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352061/04_-_rock_paper_scissors_oupoes.mp4',
    numberOfVideos: 4,
    timeToComplete: '39 minutes',
    demoLink: 'https://njpw4.codesandbox.io/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-a/348623-04-paper-rock-scissors/992070-00-paper-rock-scissors-preview',
  },
  {
    title: 'Moving Link Across a <canvas>',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352072/05_-_link_moving_rb1qtu.mp4',
    numberOfVideos: 5,
    timeToComplete: '32 minutes',
    demoLink: 'https://405hq.codesandbox.io/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-a/348624-05-moving-boxes-and-zelda/992093-00-moving-boxes-and-link-preview',
  },
  {
    title: 'Infinite Image Gallery',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352070/06_-_image_gallery_pzqqa6.mp4',
    numberOfVideos: 5,
    timeToComplete: '52 minutes',
    demoLink: 'https://e9ucz.csb.app/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-a/348625-06-infinite-image-gallery/992060-00-infinite-image-gallery-preview',
  },
  {
    title: 'Trivia Game',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352066/07_-_trivia_s5dp85.mp4',
    numberOfVideos: 6,
    timeToComplete: '57 minutes',
    demoLink: 'https://qlb3o.csb.app/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-a/348626-07-trivia/992056-00-trivia-preview',
  },
  {
    title: 'Authentication',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352072/16_-_authentication_tm16s4.mp4',
    numberOfVideos: 7,
    timeToComplete: '54 minutes',
    demoLink: undefined, // auth doesnt work in codesandbox :shrug:
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-a/348627-08-authentication/992048-00-authentication-preview',
  },
  {
    title: 'Web Speech and Timers',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352066/09_-_speech_soat2u.mp4',
    numberOfVideos: 4,
    timeToComplete: '30 minutes',
    demoLink: 'https://4jfqj.csb.app/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-a/348628-09-web-speech-and-timers/992042-00-web-speech-and-timers-preview',
  },
  {
    title: 'Calendar Picker',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352063/10_-_calendar-picker_oeeacl.mp4',
    numberOfVideos: 4,
    timeToComplete: '33 minutes',
    demoLink: 'https://d4vfr.csb.app/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-a/348629-10-calendar-picker/992041-00-calendar-picker-preview',
  },
]

export const seriesBApps = [
  {
    title: 'Chat Box',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352069/11-chat-box_gdmldg.mp4',
    numberOfVideos: 4,
    timeToComplete: '22 minutes',
    demoLink: 'https://9lrdz.csb.app/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-b/365601-1-animated-chat-box/1041046-00-chat-box-preview',
  },
  {
    title: 'Multi-Step Form',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352064/12-multi-step-form_upxoym.mp4',
    numberOfVideos: 6,
    timeToComplete: '52 minutes',
    demoLink: 'https://hbkbf.csb.app/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-b/365602-2-multi-step-form/1041044-00-multi-step-form-preview',
  },
  {
    title: 'Memory Matching Game',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352066/13-memory-matching_cvgqvl.mp4',
    numberOfVideos: 4,
    timeToComplete: '27 minutes',
    demoLink: 'https://0dsop.csb.app/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-b/365603-3-memory-matching-game/1041042-00-memory-matching-preview',
  },
  {
    title: 'Drag and Drop Math Card',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352062/08-math-cards_ybj27c.mp4',
    numberOfVideos: 4,
    timeToComplete: '30 minutes',
    demoLink: 'https://sj1bd.csb.app/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-b/365604-4-drag-and-drop-math-card/1041039-00-drag-and-drop-math-card-preview',
  },
  {
    title: 'Browser',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352067/14-browser_bnbowp.mp4',
    numberOfVideos: 6,
    timeToComplete: '53 minutes',
    demoLink: 'https://e7ws4.csb.app/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-b/365605-5-browser/1041032-00-browser-browser-preview',
  },
  {
    title: 'Real-Time Search',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352067/14-browser_bnbowp.mp4',
    numberOfVideos: 3,
    timeToComplete: '24 minutes',
    demoLink: 'https://707yr.csb.app/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-b/365606-6-real-time-search/1041031-00-real-time-search-preview',
  },
  {
    title: 'Charting the Weather',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352067/14-browser_bnbowp.mp4',
    numberOfVideos: 5,
    timeToComplete: '53 minutes',
    demoLink: 'https://v2dmf.csb.app/',
    previewLink:
      'https://learn.better.dev/courses/10-react-apps-series-b/365607-7-charting-the-weather/1041029-00-weather-chart-preview',
  },
]

export default function WhatWellBuild({ whichCourse = 'a' }) {
  return (
    <div
      id="apps"
      className={`what-well-build text-gray-200 px-10 lg:px-20 py-32 lg:py-48 ${
        whichCourse === 'a' ? 'bg-blue-900' : 'bg-purple-900'
      }`}
    >
      <div className="container mx-auto flex flex-col">
        {/* header */}
        <h2 className="fugaz-one text-4xl lg:text-5xl mr-6 lg:mb-16 text-center">
          The Apps We&apos;ll Build
        </h2>

        {/* list of apps */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 row-gap-4 lg:row-gap-12 col-gap-16"
          style={{ display: whichCourse === 'a' ? 'grid' : 'none' }}
        >
          {seriesAApps.map((app, index) => (
            <div key={index}>
              <App app={app} number={index + 1} isLast={index + 1 === 10} />
            </div>
          ))}
        </div>

        {/* show set b */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          style={{ display: whichCourse === 'b' ? 'grid' : 'none' }}
        >
          {seriesBApps.map((app, index) => (
            <div key={index}>
              <App app={app} number={index + 1} isLast={index + 1 === 10} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * Each individual app
 */
function App({ app, number }) {
  return (
    <div className="app-container pt-8 lg:pt-6 relative">
      {/* number */}
      <Number number={number} />

      {/* video */}
      <div className="relative">
        <Video url={app.videoSrc} />

        {/* icons */}
        <div className="absolute hidden lg:flex left-0 bottom-0 mb-2 ml-2 text-xs">
          <div className="mr-2 inline-block py-2 px-3 bg-black bg-opacity-75 rounded text-gray-100">
            <span className="mr-2" role="img" aria-label="Videos">
              🎬
            </span>
            <span>
              {app.numberOfVideos}{' '}
              {app.numberOfVideos === 1 ? 'video' : 'videos'}
            </span>
          </div>
          <div className="inline-block py-2 px-3 bg-black bg-opacity-75 rounded text-gray-100">
            <span className="mr-2" role="img" aria-label="Hours">
              🎤
            </span>
            <span>{app.timeToComplete}</span>
          </div>
        </div>

        {/* action buttons (preview + demo) */}
        <div className="absolute right-0 bottom-0 mb-2 mr-2 flex">
          {/* preview button */}
          <a
            href={app.previewLink}
            rel="noopener noreferrer"
            target="_blank"
            className="bg-orange-800 hover:bg-orange-700 text-orange-300 leading-none py-2 px-4 rounded shadow text-center mr-2"
          >
            Preview
          </a>
          {/* demo button */}
          <a
            href={app.demoLink}
            rel="noopener noreferrer"
            target="_blank"
            className="bg-teal-800 hover:bg-teal-700 text-teal-300 leading-none py-2 px-4 rounded shadow text-center"
          >
            Demo
          </a>
        </div>
      </div>

      {/* content */}
      <div className="mt-3 w-full">
        <h2 className="fugaz-one text-2xl mb-2 text-gray-200">{app.title}</h2>
        {/* <p className="text-gray-400 text-xl mb-6">
          This is a super cool thing where you learn useReducer().
        </p> */}
      </div>
    </div>
  )
}

function Number({ number }) {
  return (
    <div
      className="number-container hidden md:block absolute top-0 left-0 pointer-events-none w-20 z-20"
      style={{ top: '-100px', left: '-30px' }}
    >
      <svg
        className="number fugaz-one"
        viewBox="0 0 100 40"
        style={{ fontSize: '20px', height: '250px' }}
      >
        <text className="number-gray" x="0" y="30">
          {number}
        </text>
        <text className="number-colored" x="0" y="30">
          {number}
        </text>
      </svg>
    </div>
  )
}

function Video({ url }) {
  // optimization thanks to cloudinary
  const optimizedVideoUrl = url
    .replace('/upload/', '/upload/w_800,fl_animated,f_auto,q_auto/')
    .replace('.mp4', '.gif')

  return (
    <LazyLoad height={300} once>
      <img
        className="app-video rounded-lg shadow-lg md:mx-auto lg:mr-12 xl:mb-0 w-full"
        lazy="true"
        src={optimizedVideoUrl}
      />
    </LazyLoad>
  )
}
