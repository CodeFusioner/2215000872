const data = require('./data');

// Get top 5 users with the most commented posts
function getTopUsers() {
  const postCommentMap = new Map();

  data.comments.forEach(comment => {
    const post = data.posts.find(p => p.id === comment.postid);
    if (post) {
      const userId = post.userid;
      postCommentMap.set(userId, (postCommentMap.get(userId) || 0) + 1);
    }
  });

  const sorted = [...postCommentMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([userId, count]) => ({
      userid: userId,
      username: data.users[userId],
      commentCount: count
    }));

  return sorted;
}

// Get top popular or latest posts
function getPostsByType(type) {
  if (type === 'popular') {
    const maxComments = Math.max(...data.posts.map(p => p.commentCount));
    return data.posts.filter(p => p.type === 'popular' && p.commentCount === maxComments);
  } else if (type === 'latest') {
    return data.posts
      .filter(p => p.type === 'latest')
      .sort((a, b) => b.id - a.id)
      .slice(0, 5);
  } else {
    return [];
  }
}

module.exports = { getTopUsers, getPostsByType };
