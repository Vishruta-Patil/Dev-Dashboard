import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';
import { Developer } from '../types/Developer';

interface PRDistributionChartProps {
  data: Developer[];
}

const PRDistributionChart: React.FC<PRDistributionChartProps> = ({ data }) => {
  const COLORS = ['#FFBB28', '#0088FE', '#00C49F'];

  const totalPRs = data.reduce((acc, dev) => {
    return {
      prOpen: acc.prOpen + parseInt(dev.totalActivity.find(activity => activity.name === 'PR Open')?.value || '0', 10),
      prMerged: acc.prMerged + parseInt(dev.totalActivity.find(activity => activity.name === 'PR Merged')?.value || '0', 10),
      prReviewed: acc.prReviewed + parseInt(dev.totalActivity.find(activity => activity.name === 'PR Reviewed')?.value || '0', 10)
    };
  }, { prOpen: 0, prMerged: 0, prReviewed: 0 });

  
  const pieChartData = [
    { name: 'PR Open', value: totalPRs.prOpen },
    { name: 'PR Merged', value: totalPRs.prMerged },
    { name: 'PR Reviewed', value: totalPRs.prReviewed }
  ];

  return (
      <section className="chart-section">
      <h2>PR Distribution</h2>
      <ResponsiveContainer width="100%" height={550}>
        <PieChart>
          <Pie
            data={pieChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={250}
            fill="#8884d8"
            label
          >
            {
              pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))
            }
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
};

export default PRDistributionChart;
