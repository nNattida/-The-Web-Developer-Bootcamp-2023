function validUserNames(usernames) {
  // your code here
  const shortName = usernames.filter(n => {
      return n.length < 10
  });
  return shortName;
}
