const image1 = require("./../images/wallpaper.jpg");
const image2 = require("./../images/gif.gif");

let song = require('./../songs/annoying.mp3');
let songFromIPFS = 'https://ipfs.infura.io/ipfs/QmWFJQrFiGMLwkkVQfNQhq3CZLmRT1p1posPjqKCB3Nvfq'

let ambient1 = require('./../songs/ambient/ambient1.mp3');
let ambuent2 = require('./../songs/ambient/ambient2.mp3');

let techno1 = require('./../songs/techno/techno1.mp3');
let techno2 = require('./../songs/techno/techno2.mp3');

let config = {
  slideDecks: { 
    "PINK%20FLOYD": [{
      transitionName: "example",
      transitionAppear: true,
      transitionLeave: true,
      transitionAppearTimeout: 1500,
      transitionEnterTimeout: 1500,
      transitionLeaveTimeout: 1500,
      uri: image1,
      delay: 5000
    },
    {
      transitionName: "example",
      transitionAppear: true,
      transitionLeave: true,
      transitionAppearTimeout: 1500,
      transitionEnterTimeout: 1500,
      transitionLeaveTimeout: 1500,
      uri: image2,
      delay: 10000
    }],
    "LATE%20MORNING": [{
      transitionName: "example",
      transitionAppear: true,
      transitionLeave: true,
      transitionAppearTimeout: 1500,
      transitionEnterTimeout: 1500,
      transitionLeaveTimeout: 1500,
      uri: image2,
      delay: 5000
    },
    {
      transitionName: "example",
      transitionAppear: true,
      transitionLeave: true,
      transitionAppearTimeout: 1500,
      transitionEnterTimeout: 1500,
      transitionLeaveTimeout: 1500,
      uri: image1,
      delay: 10000
    }],
    "BERLIN": [{
      transitionName: "example",
      transitionAppear: true,
      transitionLeave: true,
      transitionAppearTimeout: 1500,
      transitionEnterTimeout: 1500,
      transitionLeaveTimeout: 1500,
      uri: image2,
      delay: 5000
    },
    {
      transitionName: "example",
      transitionAppear: true,
      transitionLeave: true,
      transitionAppearTimeout: 1500,
      transitionEnterTimeout: 1500,
      transitionLeaveTimeout: 1500,
      uri: image1,
      delay: 10000
    }],
    "HIP%20HOP": [{
      transitionName: "example",
      transitionAppear: true,
      transitionLeave: true,
      transitionAppearTimeout: 1500,
      transitionEnterTimeout: 1500,
      transitionLeaveTimeout: 1500,
      uri: image1,
      delay: 5000
    },
    {
      transitionName: "example",
      transitionAppear: true,
      transitionLeave: true,
      transitionAppearTimeout: 1500,
      transitionEnterTimeout: 1500,
      transitionLeaveTimeout: 1500,
      uri: image2,
      delay: 10000
    }],
  },

  playListsForUI: [
    {
      playListName: 'PINK FLOYD',
      qoute: "Long you live and high you'll fly, and smiles you'll give, tears you'll cry and all you touch and all you see is all your life will ever be ― Pink Floyd",
      genre: 'psychedelic',
      timePeriod: '1960'
    },
    {
      playListName: 'BERLIN',
      qoute: "Long you live and high you'll fly, and smiles you'll give, tears you'll cry and all you touch and all you see is all your life will ever be ― Pink Floyd",
      genre: 'House',
      timePeriod: '1960'
    },
    {
      playListName: 'LATE MORNING',
      qoute: 'late mornings...',
      genre: 'ambient',
      timePeriod: '1960'
    },
    {
      playListName: 'HIP HOP',
      qoute: "Hip-hop is the streets. Hip-hop is a couple of elements that it comes from back in the days... that feel of music with urgency that speaks to you. It speaks to your livelihood and it's not compromised. It's blunt. It's raw, straight off the street - from the beat to the voice to the words.' - Nas",
      genre: 'rap',
      timePeriod: '1990'
    },
  ],
  playList : {
    "PINK%20FLOYD": [
    song,
    songFromIPFS,
  ],
    "LATE%20MORNING":[
    ambient1,
    ambuent2,
  ],
    "BERLIN":[
    techno1,
    techno2,
    
  ],
  "HIP%20HOP":[
    techno1,
    ambuent2,
  ]}
}

export default config