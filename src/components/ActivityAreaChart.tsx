import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Developer } from '../types/Developer';
import colors from '../config/colors';

interface ActivityAreaChartProps {
  data: Developer[];
}

const ActivityAreaChart: React.FC<ActivityAreaChartProps> = ({ data }) => {
  const chartData = data.map(dev => ({
    name: dev.name,
    commits: parseInt(dev.totalActivity.find(activity => activity.name === 'Commits')?.value || '0', 10),
    pullRequests: parseInt(dev.totalActivity.find(activity => activity.name === 'PR Open')?.value || '0', 10),
    merges: parseInt(dev.totalActivity.find(activity => activity.name === 'PR Merged')?.value || '0', 10),
  }));

  return (
    <section className="chart-section">
      <h2>Commits and Pull Requests Over Time</h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="commits" stroke={colors.commits} fill={colors.commits} />
          <Area type="monotone" dataKey="pullRequests" stroke={colors.pullRequests} fill={colors.pullRequests} />
          <Area type="monotone" dataKey="merges" stroke={colors.merges} fill={colors.merges} />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
};

export default ActivityAreaChart;
