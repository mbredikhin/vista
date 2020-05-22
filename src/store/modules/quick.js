// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

export default {
  state: {
    reading: [
      {
        sentence:
          'In order to find him, they needed to know his exact ______. ',
        answers: ['location', 'place', 'site', 'setting'],
        correct: 'location',
      },

      {
        sentence:
          'Can you take it to the ______? Peter is in there, cooking dinner. ',
        answers: ['breakfast nook', 'dining room', 'sitting room', 'kitchen'],
        correct: 'kitchen',
      },

      {
        sentence:
          'She arrived at 8 p.m., opened the door and shouted “Good ______!” ',
        answers: ['morning', 'evening', 'night', 'bye'],
        correct: 'evening',
      },

      {
        sentence: 'She ______ obsessed with rock climbing at a young age. ',
        answers: ['becomes', 'became', 'has become', 'would become'],
        correct: 'became',
      },

      {
        sentence: 'He’s not a stamp collector, ______? ',
        answers: ['was he', 'wasn’t he', 'is he', 'isn’t he'],
        correct: 'is he',
      },

      {
        sentence: 'How long ______ you had this car? ',
        answers: ['did', 'do', 'have', 'were'],
        correct: 'have',
      },

      {
        sentence: '______ anyone get hurt? ',
        answers: ['did ', 'were', 'have', 'had'],
        correct: 'did',
      },

      {
        sentence: 'He ______ about birds. It drives me mad! ',
        answers: [
          'forever talk',
          'is forever talking',
          'will forever be talking',
          'has forever been talking',
        ],
        correct: 'is forever talking',
      },

      {
        sentence:
          'She keeps ______ her things all around the place which is so annoying. ',
        answers: ['to leave', 'leaves', 'leave', 'leaving'],
        correct: 'leaving',
      },

      {
        sentence: 'He ______ me to the first game when I was only 6. ',
        answers: ['used to take', 'would take', 'took', 'has taken'],
        correct: 'took',
      },

      {
        sentence:
          'At first I ______ starting work so early but this has changed. ',
        answers: [
          "didn't use to",
          "wouldn't",
          "didn't have to",
          "wasn't used to",
        ],
        correct: "wasn't used to",
      },

      {
        sentence:
          'My new PC, ______ I bought last week, has already broken down. ',
        answers: ['that', 'which', 'whose', 'who'],
        correct: 'which',
      },

      {
        sentence: "I'd like to see the photos ______ you took on holiday. ",
        answers: ['who', 'whose', 'where', '-'],
        correct: '-',
      },

      {
        sentence: 'People ______ from the illness find it difficult to relax. ',
        answers: ['suffered', 'suffering', 'who suffering', 'were suffering'],
        correct: 'suffering',
      },

      {
        sentence: "You'd better take your coat ______ the weather gets worse. ",
        answers: ['in case', 'otherwise', 'so that', 'in order to'],
        correct: 'in case',
      },

      {
        sentence:
          'She did a course in confidence building ______ overcome her phobia. ',
        answers: ['so that', 'in order to', 'although', 'in case'],
        correct: 'in order to',
      },

      {
        sentence:
          'He ______ a therapist for several years after he left school. ',
        answers: ['has seen', 'has been seeing', 'saw', 'used to seeing'],
        correct: 'saw',
      },

      {
        sentence:
          'She ______ much better since she left the hospital last week. ',
        answers: ['is feeling', 'feels', 'felt', 'has been feeling'],
        correct: 'has been feeling',
      },

      {
        sentence: 'He realized that he ______ his car keys in the office. ',
        answers: ['left', 'has left', 'had left', 'was leaving'],
        correct: 'had left',
      },

      {
        sentence:
          "We couldn't fall asleep because our neighbours ______ a lot of noise. ",
        answers: ['made', 'had made', 'have made', 'were making'],
        correct: 'were making',
      },

      {
        sentence:
          "______ plans you might have for the weekend, you'll have to change them. ",
        answers: ['Wherever', 'Whovever', 'Whatever', 'However'],
        correct: 'Whatever',
      },

      {
        sentence:
          'They ______ out for a few years before they decided to get married. ',
        answers: [
          'had gone',
          'have been going',
          'were going',
          'had been going',
        ],
        correct: 'had been going',
      },

      {
        sentence:
          "You won't pass the exam ______ you start revising immediately. ",
        answers: ['as long as', 'provided', 'unless', 'if'],
        correct: 'unless',
      },

      {
        sentence:
          "We wouldn't have missed the bus if you ____ to chat with Mary! ",
        answers: [
          "didn't stop",
          "hadn't stopped",
          "don't stop",
          "wouldn't have stopped",
        ],
        correct: "hadn't stopped",
      },

      {
        sentence: 'The party was so boring I wish I ______ there at all. ',
        answers: ["hadn't gone", "wouldn't go", "haven't gone", "didn't go"],
        correct: "hadn't gone",
      },

      {
        sentence: 'If only you ______ more time to spend with the family. ',
        answers: ['would have', 'have had', 'had', 'have'],
        correct: 'had',
      },

      {
        sentence: "Oh, you're busy? I ______ you later, OK? ",
        answers: ['am calling', 'call ', 'have called', 'will call'],
        correct: 'will call',
      },

      {
        sentence:
          'By the time the guests arrive, we ______ everything for the party. ',
        answers: [
          'will be preparing',
          'will have prepared',
          'prepare',
          'have prepared',
        ],
        correct: 'will have prepared',
      },

      {
        sentence: 'During the next meeting we ______ about setting goals. ',
        answers: ['are talking', 'will have talked', 'will be talking', 'talk'],
        correct: 'will be talking',
      },

      {
        sentence: "I can't find my keys. I ______ them. ",
        answers: [
          'may lose',
          'must lost',
          'might have lost',
          'should have lost',
        ],
        correct: 'might have lost',
      },

      {
        sentence:
          'The police stopped us and said we ______ to enter the building. ',
        answers: ["can't", "couldn't", "didn't allow", "weren't allowed"],
        correct: "weren't allowed",
      },

      {
        sentence: 'Admission was free so we ______ any tickets. ',
        answers: [
          "needn't buy",
          "mustn't buy",
          "didn't need to buy",
          "mustn't have bought",
        ],
        correct: "didn't need to buy",
      },

      {
        sentence: "I'm not sure if you're aware ______ the risk. ",
        answers: ['of', 'to', 'at', 'in'],
        correct: 'of',
      },

      {
        sentence:
          "The horror movie wasn't just frightening! It was ______ terrifying! ",
        answers: ['extremely', 'absolutely', 'very', 'fairly'],
        correct: 'absolutely',
      },

      {
        sentence:
          '______ the weather was horrible, we decided to go out for a short walk. ',
        answers: ['Even though', 'However', 'In spite of', 'Despite'],
        correct: 'Even though',
      },

      {
        sentence:
          'We should remind ______ to be thankful for all that we have. ',
        answers: ['us', '─', 'ourselves', 'we'],
        correct: 'ourselves',
      },

      {
        sentence: 'His father asked Dan where ______ all day. ',
        answers: ['had he been', 'was he', 'he had been', 'he has been'],
        correct: 'he had been',
      },

      {
        sentence: 'She advised him ______  sun cream. ',
        answers: ['putting', 'put on', 'to putting on', 'to put on'],
        correct: 'to put on',
      },

      {
        sentence: 'She was only 19 when she sailed across ______ Atlantic. ',
        answers: ['a', 'an', 'the', '─'],
        correct: 'the',
      },

      {
        sentence: 'Your leg could be broken so you must have ______ X-ray. ',
        answers: ['a', 'an', 'the', '─'],
        correct: 'an',
      },

      {
        sentence: "The square was ______ crowded we couldn't pass. ",
        answers: ['so', 'such', 'very', 'as'],
        correct: 'so',
      },

      {
        sentence:
          'Two climbers are reported to ______ during the storm last night. ',
        answers: ['die', 'have died', 'had died', 'died'],
        correct: 'have died',
      },

      {
        sentence: "I'll need to have the stairs ______.	",
        answers: ['renovate', 'renovating', 'to renovate', 'renovated'],
        correct: 'renovated',
      },

      {
        sentence: 'I only paid ₤20 for this jacket! It was a real ______.	',
        answers: ['buy', 'price', 'bargain', 'sale'],
        correct: 'bargain',
      },

      {
        sentence:
          "Jane is always poking her nose in other people's business. She's so ______! ",
        answers: ['inquisitive', 'obedient', 'playful', 'unreliable'],
        correct: 'inquisitive',
      },

      {
        sentence: "As far as I'm ______, I do not support the new government. ",
        answers: ['matter', 'referred', 'according', 'concerned'],
        correct: 'concerned',
      },

      {
        sentence: 'The window ______ was really imaginative. ',
        answers: ['exhibition', 'display', 'collection', 'vision'],
        correct: 'display',
      },

      {
        sentence:
          'She ______ the sack last week and is now looking for a new job. ',
        answers: ['did', 'made', 'took', 'got'],
        correct: 'got',
      },

      {
        sentence: "She doesn't ______ of my decision. ",
        answers: ['agree', 'approve', 'accept', 'support'],
        correct: 'approve',
      },

      {
        sentence: 'During his stay in Indonesia he went ______ with malaria. ',
        answers: ['up', 'off', 'down', 'over'],
        correct: 'down',
      },

      {
        sentence:
          'When the customs officers found some illegal goods hidden in the car, he was arrested for ______. ',
        answers: ['assault', 'mugging', 'hijacking', 'smuggling'],
        correct: 'smuggling',
      },

      {
        sentence:
          "I can't move the sofa. Could you ______ me a hand with it, please?	",
        answers: ['give', 'get', 'take', 'borrow'],
        correct: 'give',
      },

      {
        sentence:
          "I couldn't get in ______ with you all week! Where have you been?	",
        answers: ['contact', 'call', 'touch', 'talk'],
        correct: 'touch',
      },
    ],
  },
  getters: {
    getReadingTasks(state) {
      return (n) => state.reading.sort(() => 0.5 - Math.random()).slice(0, n);
    },
  },
};
