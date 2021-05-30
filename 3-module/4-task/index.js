function showSalary(users, age) {
  // ваш код...
  let result = users
    .filter((user) => user.age <= age)
    .map((user) =>  user.name + ', ' + user.balance)
    .join('\n');
  return result;
}