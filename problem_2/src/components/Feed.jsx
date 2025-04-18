import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/posts?type=latest');
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        // Fetch posts initially
        fetchPosts();

        // Set an interval to fetch new posts every 5 seconds
        const interval = setInterval(fetchPosts, 5000);

        // Cleanup function to clear the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            <Typography variant="h4">Feed</Typography>
            <List>
                {posts.map(post => (
                    <ListItem key={post.id}>
                        <ListItemText 
                            primary={post.content} 
                            secondary={`Post ID: ${post.id} - Comments: ${post.comments.length}`} 
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Feed;