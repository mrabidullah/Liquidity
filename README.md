# Deltablock Portal

A responsive static UI prototype for the Deltablock company portal. It uses HTML, Tailwind CSS, and small JavaScript files; it does not currently connect to a backend or store real account data.

## Pages

- `index.html` redirects to the sign-in page.
- `login.html` and `signup.html` contain the sign-in and registration screens.
- `dashboard.html` shows dashboard metrics, charts, and participation summaries.
- `users.html` contains sample administrator and client records.
- `analytics.html` shows a sample access log with client-side pagination.
- `accounting.html`, `reports.html`, `company.html`, `contract.html`, and `tickets.html` provide the other portal screens.

## Run locally

Open `index.html` in a browser, or serve the project directory with a local static web server. For example, with Python installed:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Build CSS

Node.js and npm are required. Install the dependencies and rebuild the generated stylesheet with:

```powershell
npm install
npm run build
```

The Tailwind source is `src/input.css`, its configuration is `tailwind.config.js`, and the generated stylesheet is `css/style.css`. Rebuild CSS after changing Tailwind classes in the HTML or the CSS source.

To rebuild automatically while editing:

```powershell
npm run watch
```

## Shared UI behavior

- `js/theme.js` provides the manual light/dark theme toggle and otherwise follows the system theme.
- `js/analytics.js` handles pagination for the sample access-log rows in `analytics.html`.
- Shared styles provide responsive layouts, accessible focus states, and glassmorphism surfaces while retaining the existing light and dark theme colors.

## Notes

The displayed data and actions are demonstration-only. Connect a backend and add authorization, persistence, and server-side validation before using the portal with real users or business data.
