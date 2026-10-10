import './style.css';
import { wedding, isValidRsvpUrl } from './wedding.js';
const intro = document.querySelector('.envelope-intro');
const seal = intro.querySelector('.envelope-seal');
const card = intro.querySelector('.invitation-card');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
intro.querySelector('.card-names').textContent = `${wedding.partnerOne} & ${wedding.partnerTwo}`;
intro.querySelector('.card-date').textContent = wedding.dateLabel;
let revealed = false;
let opened = false;
const previousOverflow = document.body.style.overflow;
const finishReveal = () => {
  intro.close();
  intro.remove();
  document.body.style.overflow = previousOverflow;
  const heading = document.querySelector('h1');
  heading.setAttribute('tabindex', '-1');
  heading.focus({ preventScroll: true });
};
const revealWebsite = (animate = false) => {
  if (revealed) return;
  revealed = true;
  if (animate && !reducedMotion.matches) {
    intro.classList.add('is-revealing');
    window.setTimeout(finishReveal, 700);
  } else {
    finishReveal();
  }
};
seal.addEventListener('click', () => {
  if (opened) return;
  opened = true;
  seal.disabled = true;
  intro.classList.add('is-open');
  intro.querySelector('#intro-instruction').textContent = 'Your invitation is inside. Tap the card to join us.';
  window.setTimeout(() => {
    if (revealed) return;
    card.disabled = false;
    card.focus({ preventScroll: true });
  }, reducedMotion.matches ? 0 : 1450);
});
card.addEventListener('click', () => revealWebsite(true));
intro.querySelector('.skip-intro').addEventListener('click', () => revealWebsite());
intro.addEventListener('cancel', (event) => {
  event.preventDefault();
  revealWebsite();
});
intro.showModal();
document.body.style.overflow = 'hidden';

const text = (id, value) => { document.getElementById(id).textContent = value; };
text('partner-one', wedding.partnerOne);
text('partner-two', wedding.partnerTwo);
text('wedding-date', wedding.dateLabel);
text('wedding-location', wedding.location);
text('ceremony-time', wedding.ceremonyTime);
text('reception-time', wedding.receptionTime);
text('venue', wedding.venue);
text('address', wedding.address);
text('dress-code', wedding.dressCode);
text('rsvp-deadline', wedding.rsvpDeadline);
document.getElementById('rsvp-deadline').hidden = !wedding.rsvpDeadline;
document.getElementById('dress-code').hidden = !wedding.dressCode;
text('footer-names', `${wedding.partnerOne} & ${wedding.partnerTwo}`);
document.title = `${wedding.partnerOne} & ${wedding.partnerTwo} · Wedding open house`;
document.querySelector('.monogram').textContent = 'TH & MT';
if (isValidRsvpUrl(wedding.rsvpUrl)) {
  const link = document.getElementById('rsvp-link');
  link.href = wedding.rsvpUrl;
  link.hidden = false;
  text('rsvp-message', 'Let us know if you can make it using the link below.');
} else {
  text('rsvp-message', 'RSVP details will be available here soon.');
}
