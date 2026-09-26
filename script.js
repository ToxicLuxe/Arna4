const screens = [...document.querySelectorAll('.screen')];
const dots = [...document.querySelectorAll('.progress i')];
let current = 0;
function showScreen(next) { current = (next + screens.length) % screens.length; screens.forEach((screen, index) => screen.classList.toggle('active', index === current)); dots.forEach((dot, index) => dot.classList.toggle('on', index === current)); }
document.querySelectorAll('[data-next]').forEach(button => button.addEventListener('click', () => showScreen(current + 1)));
document.querySelectorAll('#bingo button').forEach(card => card.addEventListener('click', () => { document.querySelector('#fact').textContent = card.dataset.fact; card.animate([{transform:'scale(1)'},{transform:'scale(1.08) rotate(-2deg)'},{transform:'scale(1)'}], {duration:360}); }));
document.querySelector('#cake').addEventListener('click', event => { event.currentTarget.classList.add('lit'); document.querySelector('#wish').textContent = 'wish received!! the universe is obsessed with you ✨'; setTimeout(() => event.currentTarget.classList.remove('lit'), 1600); });
const modal = document.querySelector('#letterModal');
const heartRain = document.querySelector('#heartRain');
function dropHearts() { heartRain.replaceChildren(); const hearts = ['💗','💖','💕','💘','🩷','✨']; for (let i = 0; i < 42; i++) { const heart = document.createElement('span'); heart.className = 'heart-drop'; heart.textContent = hearts[i % hearts.length]; heart.style.left = `${Math.random() * 100}%`; heart.style.setProperty('--size', `${18 + Math.random() * 22}px`); heart.style.setProperty('--speed', `${1.7 + Math.random() * 1.4}s`); heart.style.setProperty('--drift', `${-90 + Math.random() * 180}px`); heart.style.animationDelay = `${Math.random() * .6}s`; heartRain.append(heart); } }
document.querySelector('#openLetter').addEventListener('click', () => { modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); dropHearts(); });
document.querySelector('#closeLetter').addEventListener('click', () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); });
document.querySelector('#restart').addEventListener('click', () => showScreen(0));
showScreen(0);
