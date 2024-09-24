fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((data) => {
    const usersList = document.getElementById("users-list");
    data.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`;
      usersList.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });

fetch("https://jsonplaceholder.typicode.com/invalid-url")
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка сети'); 
    }
    return response.json(); 
  })
  .then(data => console.log(data))
  .catch(error => {
    console.error('Ошибка:', error);
  });

  const form = document.getElementById('user-form');
  form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const newUser = {
      name: name,
      email: email
    };

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Пользователь добавлен:', data);
    })
    .catch(error => console.log('Ошибка:', error));
  });


