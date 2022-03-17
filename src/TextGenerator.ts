export const TEMPLATE_AMOUNT_LENGTH = 7;

const templateOne = (
  currentJob: string,
  newJob: string,
  newCompany: string
) => {
  return `
A dream job might be enough for you guys, but not for me… I’m special. 
If you had told me 20 years ago that I would become a ${newJob} at ${newCompany} I would never have believed you.. That’s why it feels so DAMN good to be able to share this to my fans, I mean, to you guys. I hope I can be your inspiration, like I was my own. I’m looking forward to another year, where I can continue to be awesome.
`;
};

const templateTwo = (
  currentJob: string,
  newJob: string,
  newCompany: string
) => {
  return `
    Attention! Today I quit my job at ${currentJob}
    I need time to figure out what I want to do. Obviously I inherited a huge sum of money from a distant relative so I don’t have to work 24/7 like you guys.
    Stay busy out there! Meanwhile I’ll see what the future holds, on a beach in Cancun. 
    `;
};

const templateThree = (
  currentJob: string,
  newJob: string,
  newCompany: string
) => {
  return `
    I’M SUCCESSFUL! Stop what you’re doing and read about my success. Anyway, yesterday I reached a new milestone of my career that you can’t live without hearing of. I quit my job at ${currentJob} because I needed new challenges and was fired, and I can’t wait to start a new chapter at ${newCompany} as a ${newJob}. I hope this post will keep me relevant, bye!`;
};

const templateFour = (
  currentJob: string,
  newJob: string,
  newCompany: string
) => {
  return `
    Me-time alert! I’ve quit my job at ${currentJob} because it was time to try something new, also it was incredibly boring. Now I’m looking forward to starting at ${newJob} in the position as ${newJob} which is only slightly less boring, but with a much higher pay! Thanks to everyone at ${newCompany}, you’ve developed me into a better person, as in better than you. That’s why I had to move on. 
    `;
};

const templateFive = (
  currentJob: string,
  newJob: string,
  newCompany: string
) => {
  return `
    You should definitely know that I’m going up the career ladder! Yesterday I quit ${currentJob} and you should know that about me, because… ATTENTION, right? Anyway I’m off to this super sick job as ${newJob} at ${newCompany}. I hope you’re loving life like me, you should! Like this post, to sustain my confidence. 
    `;
};

export const generateTempalte = (
  currentJob: string,
  newJob: string,
  newCompany: string
) => {};

export const renderRandomTemplate = (
  currentJob: string,
  newJob: string,
  newCompany: string
) => {
  const index = Math.floor(Math.random() * TEMPLATE_AMOUNT_LENGTH);
  switch (index) {
    case 0:
      return templateOne(currentJob, newJob, newCompany);
    case 1:
      return templateTwo(currentJob, newJob, newCompany);
    case 2:
      return templateThree(currentJob, newJob, newCompany);
    case 3:
      return templateFour(currentJob, newJob, newCompany);
    case 4:
      return templateFive(currentJob, newJob, newCompany);
    default:
      return templateOne(currentJob, newJob, newCompany);
  }
};
