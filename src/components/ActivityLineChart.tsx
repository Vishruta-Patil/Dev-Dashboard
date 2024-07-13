import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Developer } from '../types/Developer';

interface ActivityLineChartProps {
  data: Developer[];
}

const ActivityLineChart: React.FC<ActivityLineChartProps> = ({ data }) => {
  const chartData = data.map(dev => ({
    name: dev.name,
    commits: parseInt(dev.totalActivity.find(activity => activity.name === 'Commits')?.value || '0', 10),
    pullRequests: parseInt(dev.totalActivity.find(activity => activity.name === 'PR Open')?.value || '0', 10),
    merges: parseInt(dev.totalActivity.find(activity => activity.name === 'PR Merged')?.value || '0', 10),
  }));

  return (
    <section className="chart-section">
      <h2>Activity Over Time</h2>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="commits" stroke="#8884d8" />
        <Line type="monotone" dataKey="pullRequests" stroke="#82ca9d" />
        <Line type="monotone" dataKey="merges" stroke="#ffc658" />
      </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default ActivityLineChart;