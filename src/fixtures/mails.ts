import { Mail } from "@/models";

const DATA: Array<Mail> = [];

for (let i = 1; i < 100; i++) {
  DATA.push({
    id: `${i}`,
    title: i%2==1 ? `Test title ${i}` : `Test title ${i} but now it is a really long title so it does not fit into one line`,
    body: `This is an example body for the ${i} mail. \
It is just text so you can check out how this works. \
It is nothing more than just an example. \
Nothing more, nothing less.
Have a nice day :) \
And keep programming in React Native!`
  })
}

export default DATA;
