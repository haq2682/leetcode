# Write your MySQL query statement below
select name as Employee from Employee as emp where emp.salary > (select salary from Employee where emp.managerId = id);