// 1. Можно ли "перевыполнить" промис?

// Ответ: 1
// Второй вызов resolve будет проигнорирован, поскольку учитывается только первый вызов resolve/reject

// 2. Задержка на промисах

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));


// 3. Анимация круга с помощью промиса

function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  
  document.body.append(div);
  
  return new Promise(resolve=> {
    setTimeout(() => {
      
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';
      
      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
      
    }, 0);
  });
}