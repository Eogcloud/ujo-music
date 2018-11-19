const image1 = require("./../images/wallpaper.jpg");
const image2 = require("./../images/gif.gif");
const image3 = require("./../images/rainy.gif");
const image4 = require("./../images/nice.jpg");
const image5 = require("./../images/white.jpg");
const image6 = require("./../images/ghost.jpg");
const image7 = require("./../images/purple.jpg");
const image8 = require("./../images/color.jpg");

let song = require('./../songs/annoying.mp3');
let songFromIPFS = 'https://ipfs.infura.io/ipfs/QmWFJQrFiGMLwkkVQfNQhq3CZLmRT1p1posPjqKCB3Nvfq'

let ambient1 = require('./../songs/ambient/ambient1.mp3');
let ambuent2 = require('./../songs/ambient/ambient2.mp3');

let techno1 = require('./../songs/techno/techno1.mp3');
let techno2 = require('./../songs/techno/techno2.mp3');

let config = {
  slideDecks: { 
    "PINK%20FLOYD": [
      {
        transitionName: "example",
        transitionAppear: true,
        transitionLeave: true,
        transitionAppearTimeout: 1500,
        transitionEnterTimeout: 1500,
        transitionLeaveTimeout: 1500,
        uri: image3,
        delay: 10000
      }
    ],
    "BERLIN": [{
      transitionName: "example",
      transitionAppear: true,
      transitionLeave: true,
      transitionAppearTimeout: 1500,
      transitionEnterTimeout: 1500,
      transitionLeaveTimeout: 1500,
      uri: image4,
      delay: 5000
    },
    {
      transitionName: "example",
      transitionAppear: true,
      transitionLeave: true,
      transitionAppearTimeout: 1500,
      transitionEnterTimeout: 1500,
      transitionLeaveTimeout: 1500,
      uri: image5,
      delay: 10000
    }],
    "BURIAL": [{
      transitionName: "example",
      transitionAppear: true,
      transitionLeave: true,
      transitionAppearTimeout: 1500,
      transitionEnterTimeout: 1500,
      transitionLeaveTimeout: 1500,
      uri: image7,
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
      uri: image8,
      delay: 5000
    }]
  },

  playListsForUI: [
    {
      playListName: 'PINK FLOYD',
      qoute: "'Strange memories on this nervous night in Las Vegas. Five years later? Six? It seems like a lifetime, or at least a Main Era—the kind of peak that never comes again. San Francisco in the middle sixties was a very special time and place to be a part of. Maybe it meant something. Maybe not, in the long run . . . ' ― Hunter S. Thompson",
      genre: 'psychedelic rock',
      timePeriod: '1965',
      song: ['Comfortably Numb', 'Uncomfortably Numb']
    },
    {
      playListName: 'BERLIN',
      qoute: "There is something about the name Berlin that evokes an image of men in hats and long coats standing under streetlamps on rainy nights",
      genre: 'House',
      timePeriod: '2000s..present',
      song: ['Bubbles','NotBubbles']
    },
    {
      playListName: 'BURIAL',
      qoute: "Late/Early sounds",
      genre: 'ambient/electronic',
      timePeriod: '2000s...present',
      song: ['late in the morning', 'early in the morning']
    },
    {
      playListName: 'HIP HOP',
      qoute: "'Hip-hop is the streets. Hip-hop is a couple of elements that it comes from back in the days... that feel of music with urgency that speaks to you. It speaks to your livelihood and it's not compromised. It's blunt. It's raw, straight off the street - from the beat to the voice to the words.' - Nas",
      genre: 'rap',
      timePeriod: '1990...present',
      song: ['Ether', 'The Takeover']
    },
  ],
  playList : {
    "PINK%20FLOYD": [
    song,
    songFromIPFS,
  ],
    "BERLIN":[
    ambient1,
    ambuent2,
  ],
    "BURIAL":[
    techno1,
    techno2,
    
  ],
  "HIP%20HOP":[
    techno1,
    ambuent2,
  ]}
}

export default config