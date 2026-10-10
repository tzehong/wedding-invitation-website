# Wedding invitation website

A responsive wedding invitation built with vanilla JavaScript and Vite. All details are sample placeholders.

## Develop

Use Node.js 22.12 or newer (validated with Node.js 24).

```sh
npm ci
npm run dev
```

## Personalize

Edit `src/wedding.js` for names, date, venue, dress code, and RSVP deadline. Set `rsvpUrl` to your HTTPS RSVP form or a `mailto:` address. Until configured, the site shows an RSVP availability message and hides the submission link. This site does not collect or store responses itself.

## Validate and build

```sh
npm test
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static hosting service. No secrets, database, or environment variables are required.
