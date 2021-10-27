import "./Employees.css";
import StoreEmployees from "../../../Store/StoreEmployees";
import Employee from "../Employee-Thumbnail/Employee";
import { v4 as uuidv4 } from 'uuid';

export interface Props {}

const { employees } = StoreEmployees;

const Employees = () => {
  return (
    <div className="employees">
      {employees.map((employee) => (
        <Employee {...employee}  key={uuidv4()} />
      ))}
    </div>
  );
};

export default Employees;
