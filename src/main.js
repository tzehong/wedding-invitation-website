import './style.css';
import { wedding, isValidRsvpUrl } from './wedding.js';

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
