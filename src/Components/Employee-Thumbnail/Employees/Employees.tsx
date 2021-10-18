import "./Employees.css";
import StoreEmployees from "../../../Store/StoreEmployees";
import Employee from "../Employee";

export interface Props {}

const { employees } = StoreEmployees;

const Employees = () => {
  return (
    <div className="employees">
      {employees.map((employee) => (
        <Employee {...employee} />
      ))}
    </div>
  );
};

export default Employees;
