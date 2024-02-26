function submitData(userName, userEmail) {
  return fetch("http://67.164.191.36:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const body = (document.querySelector("body").textContent = data.id);
    })
    .catch((error) => {
      const body = (document.querySelector("body").textContent = error.message);
    });
}
