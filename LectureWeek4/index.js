function messageDelay(msg, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (msg.length === 0) {
        reject("No message");
      }
      const upperCase = msg.toUpperCase();
      resolve(upperCase);
    }, delay);
  });
}

messageDelay(``, 1000)
  .then((uMsg) => console.log(uMsg))
  .catch((err) => console.log(`ups`));
