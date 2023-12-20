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
    new Question('Why are the zodiac constellations special?', 'Because they touch the ecliptic.', ['Because they are easier to find than other constellations.', 'Because they are brighter than other constellations.', 'Because they help me read my horoscope ']),
    new Question('The Earth is tilted how much?', '23.5º', ["It's not", '90º', '45º']),
    new Question('Jupiter is the fastest spinning planet in the solar system.', 'True', ['False']),
    new Question('Jupiter has over 60 moons, more than any otherplanet.', 'True', ['False']),
    new Question('Astronomy and astrology are the same field of study.', 'False', ['True']),
    new Question('Capella is the brightest star in…', 'Auriga', ['Taurus', 'Canis Minor', 'Canis Major']),
    new Question('The largest moon of Neptune is called…', 'Triton', ['Titan', 'Ganymede', 'Herschel']),
    new Question('Who discovered the planet Uranus through his telescope?', 'William Herschel', ['Urbain Le Verrier', 'John Couch Adams', 'Johann Galle']),
    new Question('There are possibly oceans of liquid diamond on Uranus and Neptune.', 'True', ['False']),
    new Question('How many planets are in our solar system?', '8', ['6', '9', '7']),
    new Question('An explosion that destroys a star is called a…', 'Supernova', ['Atomic Bomb', 'Neutron Star', 'Nova']),
    new Question('Mars is named after…', 'The Roman god of war', ['The Greek god of peace', 'The Chocolate', 'The Babylonian god of war']),
    new Question('In order from closest to the furthest from the sun, Mars is…', 'The 4th planet from the sun', ['The 2nd planet from the sun', 'The 3rd planet from the sun', 'The 5th planet from the sun']),
    new Question('The moon is an example of...', 'A satellite', ['Spaceship', 'A dwarf planet', 'A planet']),
    new Question('Ateroids are examples of...', 'SSSBs', ['Satellites', 'Dwarf planets', 'Planets']),
    new Question('Canopus is the second brightest star in the night sky.', 'True', ['False']),

);


mediumQuestions.push(
    new Question('If you lived at the North Pole, the North Celestial Pole would be at your zenith.', 'True', ['False']),
    new Question('On the summer solstice, north of the Arctic Circle, the sun is up for over 24 hours', 'True', ['False',]),
    new Question('What medieval thinker is famous for reintroducing the heliocentric model?', 'Nicolaus Copernicus', ['Johannes Kepler', 'Galileo Galilei', 'Aristarchus']),
    new Question('Who discovered the moons of Jupiter?', 'Galileo Galilei', ['Johannes Kepler', 'Nicolaus Copernicus', 'Aristarchus']),
    new Question('The first thinker believed to promote the heliocentric model was…', 'Aristarchus', ['Ptolemy', 'Pythadoras', 'Aristotle']),
    new Question("What was Jupiter's Greek name?", 'Zeus', ['Jupiter', 'Granymede', 'Marduk']),
    new Question('The Pleiades are never mentioned in theBible.', 'False', ['True']),
    new Question('In Greek mythology,thePleiades were…', 'The daughters of Atlas and Pleione ', ['Little children who refused to do their chores', 'Women who refused to share the secret of fire with human beings', 'Women who fell in love with Agni, the god of fire']),
    new Question("Uranus' axis is tilted more than 90 degrees.", 'True', ['False']),
    new Question('Neptune was seen in a telescope and then afterwards confirmed mathematically', 'False', ['True']),
    new Question('The primary fuel of a star is…', 'Hydrogen', ['Gasoline', 'Uranum', 'Calories']),
    new Question('When neutron stars flash, it is called a…', 'Pulsar', ['Flash Gordon', 'Crimson Comet', 'Lighthouse Star']),
    new Question('Mars diameter and circumference are about half that of the Earth', 'True', ['False']),
    new Question('The great Flood likely happened around the time of the acronical rising of the Pleiades.', 'True', ['False']),
    new Question('When a star or constellation first becomes visible on the eastern horizon for a brief moment just before sunrise, after a period of time when it had not been visible', 'Heliacal rising', ['Acronical rising']),
    new Question('Alpha Centauri and Beta Centauri can be used as pointer stars to find…', 'The Southern Cross', ['Canopus', 'North', 'Centaurus']),

);


hardQuestions.push(
    new Question('Can you see summer constellations like Lyra, Cygnus, or Aquila all winter long?', 'No. The sun is up during part of the winter when those constellations are above us.', ['Yes. Those constellations are visible all yearlong.', 'It depends on how cloudy it is outside.']),
    new Question('Amalthea the goat used its milk to nurse which god as a baby?', '.Zeus', ['Erichthonius', 'Laelaps', 'Orion']),
    new Question('Sirius has such a great apparent magnitude because…', 'Both of these together give it a great apparent magnitude', ['It is relatively bright on its own', 'It is relatively close to the Earth']),
    new Question('Procyon is the brightest star in this constellation…', 'Canis Minor', ['Auriga', 'The Pleiades', 'Canis Major']),
    new Question('When we say constellations like Orion or Taurus are “winter” constellations, this means…', 'They are up nearthe meridian in the late evening in the winter months.', ['They have stars that are very cold.', 'These constellation are never visible at all in the spring or fall.', 'These constellations are up in the sky at the same time as the Sun.']),
    new Question('Who should have won in the story of the dog Laelaps and the Teumessian fox?', '.Itis a paradox.There is no answer', ['The Teumessianfox', 'Laelaps', 'Both']),
    new Question("The edge of our sun's solar wind “bubble” is called…", 'The heliopause', ['The heliograph', 'The heliometer', 'The heliotrope']),
    new Question('The point at which light cannot escape a black hole is called…', 'The event horizon', ['TheRubicon', 'Match point', 'The point of no return']),
    new Question('Olympus Mons is the tallest mountain on Mars (and in the entire Solar system).', 'True', ['False']),
    new Question('Mars’ rotational period is…', '24.6 hours', ['6.5 hours', '11.2 hours', '34.6 hours']),
    new Question('For the Aztecs, the acronical rising of the Pleiades every 52 years…', 'All of the options', ['Was the same night the Pleiades reached the meridian at midnight', 'Was the night of the New Fire ceremony', 'Was the night they believed the world could be destroyed']),
    new Question("When a star or constellation revolves around a celestial pole and doesn't rise or set, it is…", 'Circumpolar', ['Circumnavigator', 'Circumflex', 'Circumlunar']),
    new Question('Canopus is a brightest star in…', '.Carina', ['Crux', 'Capella', 'Centaurus']),
    new Question('Carina is Latin for…', 'The keel of a ship', ['The poop deck of a ship', 'The sails of a ship', 'A ship']),
    new Question('Polaris is known as… ', 'The North Star', ['The south star', 'The Biggest Star', 'The Brightest Star']),
    new Question('The ecliptic pole…', 'All of these', ['. Is the point on the celestial sphere made by the line that runs perpendicular to the ecliptic line', 'Is the middle point of the circle drawn by the Earth’s axis during precession', '. Is what the north celestial pole would be if the Earth had no tilt']),

);

easyQuestions.forEach(el => {
    console.log(el);
});

