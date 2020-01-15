const test = new DeveloperTest({
  title: 'What kind of developer are you?',
  authors: ['ANMEDIO', 'BigVill'],
  actual: testQuestions.hard.length === 8 || false,
  questions: getRandomQuestions(testQuestions.hard),
});
const user = new BigVillUser({
  username,
  developSkillsLevel: 0,
});
console.info(`Hello, ${user.getUserName()}. Take the test!\n`);
const testResults = switchResults(testing(user, test));
user.setDevelopSkillsLevel(testResults);
console.info(
  `Your develop skills level is...\n${user.getDevelopSkillsLevel()}. Nice job!\n`,
);
