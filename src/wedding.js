// Replace these sample details before sharing the invitation.
export const wedding = {
  partnerOne: 'Alex',
  partnerTwo: 'Jamie',
  dateLabel: 'Saturday, 12 December 2026',
  location: 'Kuala Lumpur, Malaysia',
  ceremonyTime: '4:00 in the afternoon',
  receptionTime: '6:00 in the evening',
  venue: 'Your wedding venue',
  address: 'Your venue address, Kuala Lumpur',
  dressCode: 'Dress code: garden formal',
  rsvpDeadline: 'Kindly reply by 12 November 2026.',
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
