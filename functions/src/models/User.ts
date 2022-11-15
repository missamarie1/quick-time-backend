import { ObjectId } from "mongodb";
import DailyEntry from "./DailyEntry";

interface User {
  uid: string;
  _id: ObjectId;
  dailyLogs: DailyEntry[];
}
export default User;
