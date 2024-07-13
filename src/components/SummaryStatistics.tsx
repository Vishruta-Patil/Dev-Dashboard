import React from 'react';
import { Developer } from '../types/Developer';

interface SummaryStatisticsProps {
  data: Developer[];
}

const SummaryStatistics: React.FC<SummaryStatisticsProps> = ({ data }) => {
  const totalCommits = data.reduce((acc, dev) => acc + parseInt(dev.totalActivity.find(activity => activity.name === 'Commits')?.value || '0', 10), 0);
  const totalPullRequests = data.reduce((acc, dev) => acc + parseInt(dev.totalActivity.find(activity => activity.name === 'PR Open')?.value || '0', 10), 0);
  const totalMerges = data.reduce((acc, dev) => acc + parseInt(dev.totalActivity.find(activity => activity.name === 'PR Merged')?.value || '0', 10), 0);

  return (
    <div className="summary-statistics">
      <div className="stat-card">
        <h3>Total Commits</h3>
        <p>{totalCommits}</p>
      </div>
      <div className="stat-card">
        <h3>Total Pull Requests</h3>
        <p>{totalPullRequests}</p>
      </div>
      <div className="stat-card">
        <h3>Total PR Merges</h3>
        <p>{totalMerges}</p>
      </div>
    </div>
  );
};

export default SummaryStatistics;
