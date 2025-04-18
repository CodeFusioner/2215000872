const data = {
    users: {
      "1": "John Doe",
      "2": "Jane Doe",
      "3": "Alice Smith",
      "4": "Bob Johnson",
      "5": "Charlie Brown",
      "6": "Diana White",
      "7": "Edward Davis",
      "8": "Fiona Miller",
      "9": "George Wilson",
      "10": "Helen Moore"
    },
    posts: [
      { id: 1, userid: 1, content: "Post about ant", commentCount: 5, type: "popular" },
      { id: 2, userid: 1, content: "Post about elephant", commentCount: 2, type: "latest" },
      { id: 3, userid: 2, content: "Post about ocean", commentCount: 3, type: "popular" },
      { id: 4, userid: 3, content: "Post about monkey", commentCount: 1, type: "latest" },
      { id: 5, userid: 4, content: "Post about zebra", commentCount: 2, type: "latest" },
      { id: 6, userid: 5, content: "Post about igloo", commentCount: 4, type: "popular" },
      { id: 7, userid: 6, content: "Post about house", commentCount: 1, type: "latest" },
      { id: 8, userid: 7, content: "Post about bat", commentCount: 2, type: "popular" },
      { id: 9, userid: 8, content: "Post about umbrella", commentCount: 6, type: "popular" },
      { id: 10, userid: 9, content: "Post about garden", commentCount: 3, type: "latest" },
      { id: 11, userid: 10, content: "Post about travel", commentCount: 4, type: "latest" },
      { id: 12, userid: 2, content: "Post about coding", commentCount: 4, type: "popular" },
      { id: 13, userid: 3, content: "Post about AI", commentCount: 3, type: "latest" }
    ],
    comments: [
      { id: 1, postid: 1, content: "Great post!", userid: 2 },
      { id: 2, postid: 1, content: "Very informative.", userid: 3 },
      { id: 3, postid: 1, content: "I love ants!", userid: 4 },
      { id: 4, postid: 2, content: "Interesting perspective.", userid: 5 },
      { id: 5, postid: 3, content: "Ocean is beautiful.", userid: 6 },
      { id: 6, postid: 3, content: "I agree!", userid: 7 },
      { id: 7, postid: 6, content: "Nice igloo!", userid: 8 },
      { id: 8, postid: 9, content: "Amazing garden!", userid: 9 },
      { id: 9, postid: 10, content: "Love this song!", userid: 10 },
      { id: 10, postid: 11, content: "Tech is the future!", userid: 1 },
      { id: 11, postid: 11, content: "Traveling is fun!", userid: 2 },
      { id: 12, postid: 12, content: "Code rocks!", userid: 3 },
      { id: 13, postid: 12, content: "Learning everyday.", userid: 4 },
      { id: 14, postid: 12, content: "Awesome content.", userid: 5 },
      { id: 15, postid: 13, content: "AI is changing the world.", userid: 6 },
      { id: 16, postid: 13, content: "Future is here.", userid: 7 },
      { id: 17, postid: 13, content: "Loved it!", userid: 1 },
      { id: 18, postid: 5, content: "Interesting!", userid: 2 },
      { id: 19, postid: 7, content: "Cool!", userid: 3 },
      { id: 20, postid: 10, content: "Wow!", userid: 1 }
    ]
  };
  
  module.exports = data;
  