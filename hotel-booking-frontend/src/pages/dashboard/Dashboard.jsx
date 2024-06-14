import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <div style={{ textAlign: 'center' }}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/your-video-id"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Dashboard;
