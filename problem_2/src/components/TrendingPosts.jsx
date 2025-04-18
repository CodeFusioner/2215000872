import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const TrendingPosts = () => {
    const [trendingPosts, setTrendingPosts] = useState([]);

    useEffect(() => {
        const fetchTrendingPosts = async () => {
            const response = await axios.get('http://localhost:4000/posts?type=popular');
            setTrendingPosts(response.data);
        };
        fetchTrendingPosts();
    }, []);

    return (
        <Container>
            <Typography variant="h4">Trending Posts</Typography>
            <List>
                {trendingPosts.map(post => (
                    <ListItem key={post.id}>
                        <ListItemText 
                            primary={post.content} 
                            secondary={`Comments: ${post.comments.length}`} 
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default TrendingPosts;