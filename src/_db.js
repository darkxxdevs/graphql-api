const Gamers = [
  {
    ID: "1",
    Name: "John Doe",
    Age: 25,
  },
  {
    ID: "2",
    Name: "Jane Smith",
    Age: 30,
  },
  {
    ID: "3",
    Name: "Alice Johnson",
    Age: 22,
  },
  {
    ID: "4",
    Name: "Bob Anderson",
    Age: 28,
  },
  {
    ID: "5",
    Name: "Eva Williams",
    Age: 35,
  },
];
const Authors = [
  {
    ID: "1",
    Name: "Author 1",
    number: 123,
  },
  {
    ID: "2",
    Name: "Author 2",
    number: 456,
  },
  {
    ID: "3",
    Name: "Author 3",
    number: 789,
  },
  {
    ID: "4",
    Name: "Author 4",
    number: 101,
  },
  {
    ID: "5",
    Name: "Author 5",
    number: 202,
  },
];
const Reviews = [
  {
    ID: "1",
    message: "Great game!",
    author: {
      ID: "1",
      Name: "Author 1",
      number: 123,
    },
  },
  {
    ID: "2",
    message: "Enjoyed the storyline.",
    author: {
      ID: "2",
      Name: "Author 2",
      number: 456,
    },
  },
  {
    ID: "3",
    message: "Could be better.",
    author: {
      ID: "3",
      Name: "Author 3",
      number: 789,
    },
  },
  {
    ID: "4",
    message: "Interesting characters.",
    author: {
      ID: "4",
      Name: "Author 4",
      number: 101,
    },
  },
  {
    ID: "5",
    message: "Not my cup of tea.",
    author: {
      ID: "5",
      Name: "Author 5",
      number: 202,
    },
  },
];

export default { Gamers, Authors, Reviews };
