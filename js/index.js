function render() {
  usersContainer.innerHTML = ``;
  for (let i = 0; i < usernames.length; i++){
    let username = usernames[i];

  usersContainer.innerHTML +=  `
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      ${username}
    </div>
    <button type="button" class="user-delete btn btn-outline-primary">Х</button>
  </li>
`;
}
}


let usersContainer = document.querySelector(`.users-container`)
let usernames = [`qwerty`, `admin`, `test`];
let add = document.querySelector(`#add`);
let input = document.querySelector(`.form-control`);

render()

add.addEventListener(`click`, function () {
  let newUser = input.value;

  if (usernames.indexOf(newUser) != -1) {
        result.innerHTML = `Такой пользователь уже есть в системе`;
  } else {
        result.innerHTML = `Пользователь ${newUser} добавлен`;
        usernames.push(newUser);
        render();
        result.innerHTML = `Пользователь ${newUser} добавлен`;
        
        input.value = ``;
  }

});

let buttons = document.querySelectorAll(`.user-delete`);

for (let i = 0; i < buttons.length; i++){
  let = button = buttons[i];
    button.addEventListener(`click`, function () {
        usernames.splice(i, 1);
        render();
  })
};