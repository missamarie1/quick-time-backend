interface DailyEntry {
  date: Date;
  start: string;
  end: string;
  job: string;
  type: string;
  truck?: string;
  machine?: string;
  description?: string;
}
export default DailyEntry;
