import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [agentData, setAgentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        console.error('No access token found');
        return;
      }

      try {
        const response = await axios.get('https://api.gohighlevel.com/v1/agents', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setAgentData(response.data);
      } catch (error) {
        console.error('Failed to fetch agent data:', error.response ? error.response.data : error.message);
      }
    };

    fetchData();
  }, []);

  if (!agentData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(agentData, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;
