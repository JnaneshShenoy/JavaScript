let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

p.then((data) => {
  console.log(data);
  return data * 2;
})
p.then((data) => {
    console.log(data);
    return data * 2;
  })
p.then((res) => {
    console.log(res);
    return res * 4;
  })
  .then((res) => {
    console.log(res);
  });
