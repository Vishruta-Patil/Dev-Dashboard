import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActivityLineChart from './components/ActivityLineChart';
import ActivityPieChart from './components/ActivityPieChart';
import ActivityBarChart from './components/ActivityBarChart';
import ActivityAreaChart from './components/ActivityAreaChart';
import DeveloperTable from './components/DeveloperTable';
import SummaryStatistics from './components/SummaryStatistics';
import Filter from './components/Filter';
import { Developer, AuthorWorklog } from './types/Developer';
import './styles.css';

const App: React.FC = () => {
  const [data, setData] = useState<Developer[]>([]);
  const [filteredData, setFilteredData] = useState<Developer[]>([]);
  const [selectedDeveloper, setSelectedDeveloper] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/data');
        const authorWorklog: AuthorWorklog = response.data.AuthorWorklog;
        setData(authorWorklog.rows);
        setFilteredData(authorWorklog.rows);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedDeveloper === '') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(dev => dev.name === selectedDeveloper));
    }
  }, [selectedDeveloper, data]);

  const developers = data.map(dev => dev.name);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Developer Activity Dashboard</h1>
      </header>
      <main>
        <Filter 
          developers={developers}
          selectedDeveloper={selectedDeveloper}
          onChange={setSelectedDeveloper}
        />
        <div id="summary">
          <SummaryStatistics data={filteredData} />
        </div>
        <div id="charts">
          <ActivityLineChart data={filteredData} />
          <ActivityPieChart data={filteredData} />
          <ActivityBarChart data={filteredData} />
          <ActivityAreaChart data={filteredData} />
        </div>
        <div id="table">
          <DeveloperTable data={filteredData} />
        </div>
      </main>
    </div>
  );
}

export default App;
