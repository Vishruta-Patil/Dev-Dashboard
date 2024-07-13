import React from 'react';
import { Developer } from '../types/Developer';

interface DeveloperTableProps {
  data: Developer[];
}

const DeveloperTable: React.FC<DeveloperTableProps> = ({ data }) => {
  return (
    <section className="summary-table">
         <h2>Summary Table</h2>
    <table className="developer-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Commits</th>
          <th>PR Open</th>
          <th>PR Merged</th>
          <th>PR Reviewed</th>
          <th>PR Comments</th>
          <th>Incident Alerts</th>
          <th>Incidents Resolved</th>
        </tr>
      </thead>
      <tbody>
        {data.map((developer) => (
          <tr key={developer.name}>
            <td>{developer.name}</td>
            <td>{developer.totalActivity.find(activity => activity.name === 'Commits')?.value}</td>
            <td>{developer.totalActivity.find(activity => activity.name === 'PR Open')?.value}</td>
            <td>{developer.totalActivity.find(activity => activity.name === 'PR Merged')?.value}</td>
            <td>{developer.totalActivity.find(activity => activity.name === 'PR Reviewed')?.value}</td>
            <td>{developer.totalActivity.find(activity => activity.name === 'PR Comments')?.value}</td>
            <td>{developer.totalActivity.find(activity => activity.name === 'Incident Alerts')?.value}</td>
            <td>{developer.totalActivity.find(activity => activity.name === 'Incidents Resolved')?.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </section>
  );
};

export default DeveloperTable;
