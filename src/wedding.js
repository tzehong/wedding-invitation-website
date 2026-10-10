// Wedding invitation details.
export const wedding = {
  partnerOne: 'Yong Tze Hong',
  partnerTwo: 'Nguyen Minh Thu',
  dateLabel: 'Sunday, 29 November 2026 · 6:00 PM',
  location: 'Broga, Lenggeng, Negeri Sembilan',
  ceremonyTime: '6:00 PM',
  receptionTime: 'At our home',
  venue: 'Wedding open house',
  address: '206 KG Baru Broga, 71750 Lenggeng, Negeri Sembilan',
  dressCode: '',
  rsvpDeadline: '',
  // Add an HTTPS form URL or mailto: address to enable the RSVP button.
  rsvpUrl: '',
};

export function isValidRsvpUrl(value) {
  if (!value) return false;
  try {
    const url = new URL(value);
    return (url.protocol === 'https:' && Boolean(url.hostname)) ||
      (url.protocol === 'mailto:' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(url.pathname));
  } catch {
    return false;
  }
}
