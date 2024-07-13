export interface ActivityMeta {
    label: string;
    fillColor: string;
  }
  
  export interface TotalActivity {
    name: string;
    value: string;
  }
  
  export interface DayWiseActivityItem {
    count: string;
    label: string;
    fillColor: string;
  }
  
  export interface DayWiseActivity {
    date: string;
    items: {
      children: DayWiseActivityItem[];
    };
  }
  
  export interface Developer {
    name: string;
    totalActivity: TotalActivity[];
    dayWiseActivity: DayWiseActivity[];
    activeDays: {
      days: number;
      isBurnOut: boolean;
      insight: string[];
    };
  }
  
  export interface AuthorWorklog {
    activityMeta: ActivityMeta[];
    rows: Developer[];
  }
  