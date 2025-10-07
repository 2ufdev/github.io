const randomNumber = (min, max) => Math.round((max - min) * Math.random() + min);

const chatFunc = () => {
  document.querySelectorAll('.snowflake').forEach(e => {
    e.style.backgroundImage = `url('images/chat${randomNumber(1, 9)}.jpg')`;
  });
};

const _wrapper = document.getElementById('snow-wrapper');
if (_wrapper) {
  for (let i = 0; i < 15; i++) {
    const flake = document.createElement('div');
    flake.classList.add('snowflake');
    flake.style.left = `${randomNumber(0, 100)}vw`;
    flake.style.animationDuration = `${randomNumber(8, 18)}s`;
    flake.style.animationDelay = `${randomNumber(0, 8)}s`;
    _wrapper.appendChild(flake);
  }
}

chatFunc();
