class Question {
  constructor(question, correctAnswer, incorrectAnswers) {
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.incorrectAnswers = incorrectAnswers;
  }
}

const easyQuestions = [];
const mediumQuestions = [];
const hardQuestions = [];

easyQuestions.push(
  new Question("Libra means…", "The scales", [
    "The crow",
    "The virgin",
    "The plowman",
  ]),
  new Question(
    "If you found a chunk of space rock on the ground, it would be a…",
    "Meteorite",
    ["Meteor", "Meteoroid", "Meteor shower"]
  ),
  new Question("Leo means…", "The lion", [
    "The virgin",
    "The plowman",
    "The crow",
  ]),
  new Question("Venus is the hottest planet in the solar system.", "True", [
    "False",
  ]),
  new Question(
    "Venus is the third brightest regularly seen object in the sky, behind the sun and the moon.",
    "True",
    ["False"]
  ),
  new Question("Venus is so hot because of the…", "Greenhouse effect ", [
    "Gaslight effect",
    "Garfield effect",
    "G-force effect ",
  ]),
  new Question("Venus is sometimes called…", "All of these ", [
    "The morning star",
    "The evening star",
    "Earth's twin",
  ]),
  new Question(
    "Meteor showers are the result of…",
    "The Earth moving through the debris field of a comet or another object.",
    [
      "Stars falling from the sky.",
      "The Earth not having enough meteorites on it.",
      "Meteors falling when it is also raining.",
    ]
  ),
  new Question("Comets are a type of…", "Small Solar System Body", [
    "Dwarf Planet",
    "Planet",
    "Satellite",
  ]),
  new Question("A lunar eclipse happens about once a month.", "False", [
    "True",
  ]),
  new Question(
    "When an eclipsed moon looks red, this is called…",
    "A blood moon",
    ["A harvest moon", "A supermoon ", "A red moon "]
  ),
  new Question("Most solar eclipses last at least an hour", "False", ["True"]),
  new Question("The moon's path around the Earth is elliptical.", "True", [
    "False",
  ]),
  new Question(
    "It isn't important to have protective eyewear while watching an eclipse.",
    "False",
    ["True"]
  ),
  new Question("How many constellations are part of the Zodiac?", "12", [
    "10",
    "15",
    "14",
  ]),
  new Question("Which constellation represents a crab?", "Cancer", [
    "Sagittarius",
    "Capricornus",
    "Virgo",
  ]),
  new Question("Which constellation represents scales?", "Libra", [
    "Sagittarius",
    "Leo",
    "Scorpius",
  ]),
  new Question(
    "Why are the zodiac constellations special?",
    "Because they touch the ecliptic.",
    [
      "Because they are easier to find than other constellations.",
      "Because they are brighter than other constellations.",
      "Because they help me read my horoscope ",
    ]
  ),
  new Question("The Earth is tilted how much?", "23.5º", [
    "It's not tilted",
    "90º",
    "45º",
  ]),
  new Question(
    "Astronomy and astrology are the same field of study.",
    "False",
    ["True"]
  ),
  new Question("The largest moon of Neptune is called…", "Triton", [
    "Titan",
    "Ganymede",
    "Herschel",
  ]),
  new Question(
    "Who discovered the planet Uranus through his telescope?",
    "William Herschel",
    ["Urbain Le Verrier", "John Couch Adams", "Johann Galle"]
  ),
  new Question("How many planets are in our solar system?", "8", [
    "6",
    "9",
    "7",
  ]),
  new Question("An explosion that destroys a star is called a…", "Supernova", [
    "Atomic Bomb",
    "Neutron Star",
    "Nova",
  ]),
  new Question("Mars is named after…", "The Roman god of war", [
    "The Greek god of peace",
    "The Chocolate",
    "The Babylonian god of war",
  ]),
  new Question(
    "In order from closest to the furthest from the sun, Mars is…",
    "The 4th planet from the sun",
    [
      "The 2nd planet from the sun",
      "The 3rd planet from the sun",
      "The 5th planet from the sun",
    ]
  ),
  new Question("The moon is an example of…", "A satellite", [
    "Spaceship",
    "A dwarf planet",
    "A planet",
  ]),
  new Question("Asteroids are examples of…", "SSSBs", [
    "Satellites",
    "Dwarf planets",
    "Planets",
  ]),
  new Question("The brightest object in our sky is…", "The sun", [
    "The moon",
    "The planet Venus",
    "Haley's comet",
  ]),
  new Question("The Earth spins around on its…", "Axis", [
    "Axiom",
    "Axle",
    "Axe",
  ]),
  new Question(
    "The line drawn from due south, straight over your head, and through due north is called…",
    "The Meridian",
    ["The Mercury Line", "The Mermaid", "The Meropic Line"]
  ),
  new Question(
    "From the standpoint of an observer on Earth, the point where the sky meets the land or water is called…",
    "The horizon",
    ["Twilight", "The celestial equator", "The terminator"]
  ),
  new Question(
    "A formal group of stars that make a picture in the sky is called…",
    "A constellation",
    ["A celestial globe", "A celestial sphere", "A comet"]
  ),
  new Question("What is light pollution?", "Extra light in the atmosphere", [
    "Litter on the side of the road",
    "Exhaust from cars",
    "Poison in our water supply",
  ]),
  new Question("Polaris is known as…", "The North Star", [
    "The South Star",
    "The Biggest Star",
    "The Brightest Star",
  ])
);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
mediumQuestions.push(
  new Question(
    "Jupiter is the fastest spinning planet in the solar system.",
    "True",
    ["False"]
  ),
  new Question("Boötes means…", "The plowman", [
    "The crow",
    "The virgin",
    "The lion",
  ]),
  new Question(
    "Venus is…",
    "Just slightly smaller than the Earth, but almost the same size",
    [
      "Much bigger than the Earth",
      "Exactly the same size as the Earth",
      "Much smaller than the Earth",
    ]
  ),
  new Question(
    "It takes longer for Venus to spin on its own axis than it does for it to go around the sun.",
    "True",
    ["False"]
  ),
  new Question("Comet can often be seen with two tail", "True", ["False"]),
  new Question("The radiant for the Orionids is…", "The constellation Orion", [
    "The constellation Perseus",
    "The constellation Gemini",
    "The constellation Lyra",
  ]),
  new Question("What comet reappears every 75-76 years?", "Halley's Comet", [
    "The Great Comet of 1882",
    "Comet Hale-Bopp",
    "Comet Thatcher",
  ]),
  new Question(
    "Meteor showers are best observed…",
    "In the morning before the twilight of dawn.",
    ["Right after sunset.", "Right after sunrise", "At noon."]
  ),
  new Question(
    "When the moon completely enters the Earth's umbra, this is what kind of eclipse?",
    "Total",
    ["Penumbral", "Complete", "Partial"]
  ),
  new Question(
    "In what phase of the moon must a lunar eclipse take place?",
    "Full Moon",
    ["First Quarter ", "Third Quarter", "New Moon"]
  ),
  new Question(
    "Why are the zodiac constellations special?",
    "Because they touch the ecliptic",
    [
      "Because they help me read my horoscope",
      "Because they are brighter than other constellations",
      "Because they are easier to find than other constellations",
    ]
  ),
  new Question(
    "Which constellation begins the traditional list of Zodiac constellations?",
    "Aries",
    ["Capricornus", "Taurus", "Gemini"]
  ),
  new Question(
    "The path the sun takes through the celestial sphere is called…",
    "The ecliptic",
    ["The celestial equator", "The celestial pole", "The meridian"]
  ),
  new Question(
    "Looking down on the north pole, the Earth spins…",
    "Counterclockwise",
    ["Clockwise"]
  ),
  new Question("What are the two ice giant planets?", "Uranus and Neptune", [
    "Pluto and Neptune",
    "Mercury and Venus",
    "Jupiter and Saturn",
  ]),
  new Question(
    "A dwarf planet…",
    "Has not cleared its own neighborhood of other bodies",
    [
      "Is a satellite going around a planet",
      "Is a small solar system body",
      "Is not rounded by its own gravity",
    ]
  ),
  new Question(
    "How long does it take for the moon to go through a complete cycle of phases?",
    "29.5 days",
    ["27.3 days", "14 days", "24 hours"]
  ),
  new Question(
    "The earliest version of the Old Roman calendar…",
    "Had 10 lunar months",
    [
      "Had 12 months of equal length",
      "Had 12 lunar months",
      "Had 12 months of unequal length",
    ]
  ),
  new Question(
    "If you lived at the North Pole, the North Celestial Pole would be at your zenith.",
    "True",
    ["False"]
  ),
  new Question(
    "On the summer solstice, north of the Arctic Circle, the sun is up for over 24 hours",
    "True",
    ["False"]
  ),
  new Question(
    "What medieval thinker is famous for reintroducing the heliocentric model?",
    "Nicolaus Copernicus",
    ["Johannes Kepler", "Galileo Galilei", "Aristarchus"]
  ),
  new Question("Who discovered the moons of Jupiter?", "Galileo Galilei", [
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Aristarchus",
  ]),
  new Question(
    "The first thinker believed to promote the heliocentric model was…",
    "Aristarchus",
    ["Ptolemy", "Pythadoras", "Aristotle"]
  ),
  new Question("What was Jupiter's Greek name?", "Zeus", [
    "Jupiter",
    "Granymede",
    "Marduk",
  ]),
  new Question("The Pleiades are never mentioned in the Bible.", "False", [
    "True",
  ]),
  new Question(
    "In Greek mythology, the Pleiades were…",
    "The daughters of Atlas and Pleione ",
    [
      "Little children who refused to do their chores",
      "Women who refused to share the secret of fire with human beings",
      "Women who fell in love with Agni, the god of fire",
    ]
  ),
  new Question("Uranus' axis is tilted more than 90 degrees.", "True", [
    "False",
  ]),
  new Question(
    "Neptune was seen in a telescope and then afterwards confirmed mathematically",
    "False",
    ["True"]
  ),
  new Question("The primary fuel of a star is…", "Hydrogen", [
    "Gasoline",
    "Uranum",
    "Calories",
  ]),
  new Question("When neutron stars flash, it is called a…", "Pulsar", [
    "Flash Gordon",
    "Crimson Comet",
    "Lighthouse Star",
  ]),
  new Question(
    "Mars diameter and circumference are about half that of the Earth",
    "True",
    ["False"]
  ),
  new Question(
    "The great Flood likely happened around the time of the acronical rising of the Pleiades.",
    "True",
    ["False"]
  ),
  new Question(
    "Alpha Centauri and Beta Centauri can be used as pointer stars to find…",
    "The Southern Cross",
    ["Canopus", "North", "Centaurus"]
  ),
  new Question(
    "The Sun…",
    "Rises on the Eastern horizon and sets on the Western horizon",
    [
      "Rises and sets on the Eastern horizon",
      "Rises and sets on the Western horizon",
      "Rises on the Western horizon and sets on the Eastern horizon",
    ]
  ),
  new Question(
    "Polaris is an important star to Earth observers because…",
    "It is really close to the celestial north pole",
    [
      "It is really close to the celestial equator",
      "It is really close to the celestial south pole",
      "It is the brightest star in the night sky",
    ]
  ),
  new Question("How fast does light go?", "Over 186,000 miles per second", [
    "Over 186,000 miles per hour",
    "Slightly faster than the speed of sound",
    "About as fast as a commercial airplane",
  ]),
  new Question(
    "Aquila is an eagle, named after the pet bird of the Greek god…",
    "Zeus",
    ["Hercules", "Orpheus", "Cygnus"]
  ),
  new Question("Polaris is in what constellation?", "Ursa Minor", [
    "Cassiopeia",
    "Ursa Major",
    "The Big Dipper",
  ]),
  new Question(
    "The model of the universe where the Sun is at the center and everything else revolves around it is called…",
    "Heliocentric",
    ["Terrestrial", "Lunarcentric", "Geocentric"]
  ),
  new Question(
    "The point right over the head of an observer on the Earth is called…",
    "The Zenith",
    ["The Zebra", "The Zealot", "The Zero Point"]
  ),
  new Question(
    "Who was a nymph and part of Artemis' hunting party?",
    "Callisto",
    ["Arcas", "Cassiopeia", "Andromeda"]
  ),
  new Question(
    "Who was the mythical queen of Ethiopia who thought she was more beautiful than anyone?",
    "Cassiopeia",
    ["Arcas", "Callisto", "Andromeda"]
  )
);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
hardQuestions.push(
  new Question("The brightest star in Boötes is called…", "Arcturus", [
    "Romulus",
    "Spica",
    "Regulus",
  ]),
  new Question("The brightest star in Virgo is called…", "Spica", [
    "Polaris",
    "Regulus",
    "Arcturus",
  ]),
  new Question(
    "The phrase “Follow the arc to Arcturus” is referring to…",
    "The arc of the Big Dipper's handle",
    [
      "Noah's Ark",
      "The arc of Virgo's leg",
      "The arc of the Little Dipper's handle",
    ]
  ),
  new Question("The brightest star in Leo is…", "Regulus", [
    "Spica",
    "Betelgeuse",
    "Arcturus",
  ]),
  new Question(
    "The phrase “Follow the spike to Spica” refers to…",
    "The spike shape in the bright stars of Boötes",
    [
      "The spike shape in the bright stars of Libra",
      "The spike shape in the bright stars of Leo",
      "The spike shape in the bright stars of Virgo",
    ]
  ),
  new Question(
    "Mercury's maximum elongation is…",
    "The largest distance Mercury can be from the sun in our sky",
    [
      "The longest distance Mercury can be from the Earth",
      "The largest circumference Mercury can have",
      "The largest diameter Mercury can have",
    ]
  ),
  new Question(
    "Short period comets take less than how many years to complete their obits?",
    "200",
    ["2", "2000", "20"]
  ),
  new Question(
    "When comets get to the region of the inner planets, the gaseous atmosphere that appears around them is called a…",
    "Coma",
    ["Comb", "Comic", "Compost"]
  ),
  new Question(
    "NASA stands for…",
    "National Aeronautics and Space Administration",
    [
      "Need Another Seven Astronauts",
      "National Astronaut's Space Alliance ",
      "National Aerospace System Affiliation",
    ]
  ),
  new Question(
    "How many men in the Apollo Program successfully walked on the moon?",
    "12",
    ["10", "6", "2"]
  ),
  new Question("The first man in space was…", "Yuri Gagarin", [
    "Neil Armstrong",
    "John Glenn",
    "Alan Shepard",
  ]),
  new Question("The Hebrews use a…", "Lunisolar calendar", [
    "Lunar calendar",
    "Old calendar",
    "Solar calendar",
  ]),
  new Question("How long is 12 lunar months?", "354 days", [
    "350 days",
    "366 days",
    "365 days",
  ]),
  new Question(
    "Whose edict modified the Julian calendar in 1582?",
    "Pope Gregory XIII",
    ["Pope Francis", "Pope Gregory I", "Pope John Paul II"]
  ),
  new Question(
    "Can you see summer constellations like Lyra, Cygnus, or Aquila all winter long?",
    "No. The sun is up during part of the winter when those constellations are above us.",
    [
      "Yes. Those constellations are visible all yearlong.",
      "It depends on how cloudy it is outside.",
    ]
  ),
  new Question(
    "Amalthea the goat used its milk to nurse which god as a baby?",
    "Zeus",
    ["Erichthonius", "Laelaps", "Orion"]
  ),
  new Question(
    "Sirius has such a great apparent magnitude because…",
    "Both of these together give it a great apparent magnitude",
    [
      "It is relatively bright on its own",
      "It is relatively close to the Earth",
    ]
  ),
  new Question(
    "Procyon is the brightest star in this constellation…",
    "Canis Minor",
    ["Auriga", "The Pleiades", "Canis Major"]
  ),
  new Question(
    "When we say constellations like Orion or Taurus are “winter” constellations, this means…",
    "They are up nearthe meridian in the late evening in the winter months.",
    [
      "They have stars that are very cold.",
      "These constellation are never visible at all in the spring or fall.",
      "These constellations are up in the sky at the same time as the Sun.",
    ]
  ),
  new Question(
    "Who should have won in the story of the dog Laelaps and the Teumessian fox?",
    "It is a paradox. There is no answer",
    ["The Teumessian fox", "Laelaps", "Both"]
  ),
  new Question(
    "The edge of our sun's solar wind “bubble” is called…",
    "The heliopause",
    ["The heliograph", "The heliometer", "The heliotrope"]
  ),
  new Question(
    "The point at which light cannot escape a black hole is called…",
    "The event horizon",
    ["The Rubicon", "Match point", "The point of no return"]
  ),
  new Question(
    "Olympus Mons is the tallest mountain on Mars (and in the entire Solar system).",
    "True",
    ["False"]
  ),
  new Question("Mars' rotational period is…", "24.6 hours", [
    "6.5 hours",
    "11.2 hours",
    "34.6 hours",
  ]),
  new Question(
    "For the Aztecs, the acronical rising of the Pleiades every 52 years…",
    "All of the options",
    [
      "Was the same night the Pleiades reached the meridian at midnight",
      "Was the night of the New Fire ceremony",
      "Was the night they believed the world could be destroyed",
    ]
  ),
  new Question(
    "When a star or constellation revolves around a celestial pole and doesn't rise or set, it is…",
    "Circumpolar",
    ["Circumnavigator", "Circumflex", "Circumlunar"]
  ),
  new Question("Canopus is a brightest star in…", "Carina", [
    "Crux",
    "Capella",
    "Centaurus",
  ]),
  new Question("Carina is Latin for…", "The keel of a ship", [
    "The poop deck of a ship",
    "The sails of a ship",
    "A ship",
  ]),
  new Question("Polaris is known as…", "The North Star", [
    "The south star",
    "The Biggest Star",
    "The Brightest Star",
  ]),
  new Question("The ecliptic pole…", "All of these", [
    "Is the point on the celestial sphere made by the line that runs perpendicular to the ecliptic line",
    "Is the middle point of the circle drawn by the Earth's axis during precession",
    "Is what the north celestial pole would be if the Earth had no tilt",
  ]),
  new Question(
    "What day of creation did God create the sun, moon, and stars?",
    "4",
    ["1", "2", "3"]
  ),
  new Question(
    "What does God create on the first three days of creation?",
    "Light, waters, sky, and land",
    [
      "Earth, wind, and fire",
      "Sun, moon, and stars",
      "Water creatures, sky creatures, and land creatures",
    ]
  ),
  new Question(
    "Which of these is not a reason why God created the lights in the sky?",
    "To be able to predict the future",
    [
      "To mark the seasons of life",
      "To mark days and years",
      "To separate the day from the night",
    ]
  ),
  new Question(
    "The Pharaohs of Egypt would go down to the Nile River to worship the sun god, whose name was…",
    "Ra",
    ["Khnum", "Nut", "Horus"]
  ),
  new Question(
    "The model of the universe where the Earth is at the center and everything else resolves around it is called…",
    "Geocentric",
    ["Heliocentric", "Lunarcentric", "Terrestrial"]
  ),
  new Question(
    "How much of the matter in the solar system does the sun contain?",
    "The sun contains over 99% of the stuff in the solar system",
    [
      "The sun ontains over 50% of the stuff in the solar system",
      "The sun contains over 85% of the stuff in the solar system",
      "The sun contains over 75% of the stuff in the solar system",
    ]
  ),
  new Question(
    "The point right over the head of an observer on the Earth is called…",
    "The Zenith",
    ["The Zebra", "The Zero Point", "The Zealot"]
  ),
  new Question(
    "Lyra was said to be the golden lyre of the legendary musician…",
    "Orpheus",
    ["Hercules", "Zeus", "Aquila"]
  ),
  new Question("Cygnus is the Greek word for…", "Swan", [
    "Eagle",
    "Bird",
    "Hawk",
  ]),
  new Question("How many official constellation are there?", "88", [
    "81",
    "99",
    "48",
  ]),
  new Question("Which star has a magnitude of zero?", "Vega", [
    "Deneb",
    "Sirius",
    "Venus",
  ])
);

export const questions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
};
