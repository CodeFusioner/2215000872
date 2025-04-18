import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopUsers from './components/TopUsers';
import TrendingPosts from './components/TrendingPosts';
import Feed from './components/Feed';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/top-users" element={<TopUsers />} />
                <Route path="/trending-posts" element={<TrendingPosts />} />
            </Routes>
        </Router>
    );
};

export default App;