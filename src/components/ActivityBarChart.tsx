import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Developer } from '../types/Developer';
import colors from '../config/colors';

interface ActivityBarChartProps {
  data: Developer[];
}

const ActivityBarChart: React.FC<ActivityBarChartProps> = ({ data }) => {
  const chartData = data.map(dev => ({
    name: dev.name,
    commits: parseInt(dev.totalActivity.find(activity => activity.name === 'Commits')?.value || '0', 10),
    pullRequests: parseInt(dev.totalActivity.find(activity => activity.name === 'PR Open')?.value || '0', 10),
    merges: parseInt(dev.totalActivity.find(activity => activity.name === 'PR Merged')?.value || '0', 10),
  }));

  return (
    <section className="chart-section">
      <h2>Activity Distribution</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="commits" fill={colors.commits} />
          <Bar dataKey="pullRequests" fill={colors.pullRequests} />
          <Bar dataKey="merges" fill={colors.merges} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default ActivityBarChart;
