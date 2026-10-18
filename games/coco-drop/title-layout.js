/* Decorative title layers only. The game's controls, score and fruit ladder stay native. */
(() => {
  const title = document.getElementById('title-screen');
  if (!title || document.querySelector('.title-art-background')) return;
  const background = document.createElement('div');
  background.className = 'title-art-background';
  background.setAttribute('aria-hidden', 'true');
  document.body.prepend(background);
  const crate = document.createElement('img');
  crate.className = 'title-art-crate';
  crate.src = './title-crate.png';
  crate.alt = '';
  crate.setAttribute('aria-hidden', 'true');
  title.prepend(crate);
  const fruits = document.createElement('div');
  fruits.className = 'title-art-fruits';
  fruits.setAttribute('aria-hidden', 'true');
  for (const name of ['lemon', 'grapes', 'orange', 'cherry', 'melon', 'coconut', 'watermelon', 'peach']) {
    const fruit = document.createElement('img');
    fruit.className = `title-art-fruit title-fruit-${name}`;
    fruit.src = `./title-fruit-${name}.png`;
    fruit.alt = '';
    fruits.append(fruit);
  }
  title.insertBefore(fruits, title.firstElementChild.nextElementSibling);
})();
