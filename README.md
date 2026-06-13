# Accessible Profile Dashboard

## Setup & Run locally
```bash
npm install
npm run dev        # App runs on http://localhost:3000
```

## Run Cypress tests (local)
```bash
# In a separate terminal while app is running:
npx cypress run
# Or open interactive UI:
npx cypress open
```

## Run with Docker
```bash
docker-compose up --build
```
Reports appear in `cypress/reports/` after tests finish.

## Login credentials
- Username: `testuser`
- Password: `password`

## Accessibility notes
All pages target WCAG 2.1 AA. Zero critical/serious axe-core violations.