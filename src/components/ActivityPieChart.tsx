import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Developer } from '../types/Developer';
import colors from '../config/colors';

interface ActivityPieChartProps {
  data: Developer[];
}

const ActivityPieChart: React.FC<ActivityPieChartProps> = ({ data }) => {
  const chartData = data.map(dev => ({
    name: dev.name,
    value: parseInt(dev.totalActivity.find(activity => activity.name === 'Commits')?.value || '0', 10),
  }));

  const COLORS = [colors.commits, colors.pullRequests, colors.merges, colors.issues];

  return (
    <section className="chart-section">
      <h2>Commits Proportion</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={200} fill="#8884d8" label>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
};

export default ActivityPieChart;
