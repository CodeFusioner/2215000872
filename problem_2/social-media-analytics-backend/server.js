const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// Load mock data
const dataPath = path.join(__dirname, 'data', 'mockData.json');
const mockData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Get Top Users
app.get('/users', (req, res) => {
    const userPostCounts = Object.keys(mockData.users).map(userId => {
        const userPosts = mockData.posts.filter(post => post.userid == userId);
        const commentCount = userPosts.reduce((acc, post) => acc + post.comments.length, 0);
        return { id: userId, name: mockData.users[userId], commentCount };
    });

    userPostCounts.sort((a, b) => b.commentCount - a.commentCount);
    const topUsers = userPostCounts.slice(0, 5);
    res.json(topUsers);
});

// Get Posts
app.get('/posts', (req, res) => {
    const type = req.query.type;
    if (type === 'popular') {
        const postCommentCounts = mockData.posts.map(post => ({
            ...post,
            commentCount: post.comments.length
        }));

        const maxComments = Math.max(...postCommentCounts.map(post => post.commentCount));
        const popularPosts = postCommentCounts.filter(post => post.commentCount === maxComments);
        res.json(popularPosts);
    } else if (type === 'latest') {
        const latestPosts = mockData.posts.sort((a, b) => b.id - a.id).slice(0, 5);
        res.json(latestPosts);
    } else {
        res.status(400).json({ error: 'Invalid type parameter. Accepted values are "popular" or "latest".' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});