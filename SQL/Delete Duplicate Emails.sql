# Write your MySQL query statement below
delete person1 from Person person1, Person person2 where person1.email = person2.email and person1.id > person2.id;