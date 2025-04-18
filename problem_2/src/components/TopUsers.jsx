import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem } from '@mui/material';

const TopUsers = () => {
    const [topUsers, setTopUsers] = useState([]);

    useEffect(() => {
        const fetchTopUsers = async () => {
            const response = await axios.get('http://localhost:4000/users');
            setTopUsers(response.data);
        };
        fetchTopUsers();
    }, []);

    return (
        <Container>
            <Typography variant="h4">Top Users</Typography>
            <List>
                {topUsers.map(user => (
                    <ListItem key={user.id}>
                        {user.name} - Comments: {user.commentCount}
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default TopUsers;