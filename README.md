# Accessible User Profile Dashboard

## Overview

Accessible User Profile Dashboard is a React-based web application designed with accessibility as a primary focus. The project demonstrates the implementation of WCAG 2.1 accessibility practices, automated accessibility testing using Axe-Core, end-to-end testing with Cypress, and containerized deployment using Docker.

The application includes:

* Login Page
* Dashboard Page
* Profile Edit Page
* Keyboard Navigation Support
* Accessibility Testing with Axe-Core
* Automated End-to-End Testing with Cypress
* Dockerized Application and Test Environment

---

## Features

### Login Page (`/login`)

* Username input
* Password input
* Login button
* Error handling
* Skip-to-main-content link
* Accessible form labels

### Dashboard Page (`/dashboard`)

* Welcome message
* User directory table
* Navigation menu
* Logout functionality
* Protected route behavior

### Profile Edit Page (`/profile/edit`)

* Name input
* Email input
* Biography textarea
* Color preference selector
* Save and Cancel actions
* Success message display

---

## Accessibility Features

* Semantic HTML5 elements (`nav`, `main`, `section`, `form`)
* Proper form labels
* Keyboard-only navigation support
* Skip navigation link
* Focus management
* ARIA attributes where appropriate
* Axe-Core accessibility validation
* WCAG 2.1 compliance checks

---

## Technologies Used

* React
* React Router DOM
* Cypress
* Axe-Core
* Cypress-Axe
* Mochawesome
* Docker
* Docker Compose
* HTML5
* CSS3
* JavaScript

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd accessible-profile-dashboard
```

### Install Dependencies

```bash
npm install
```

---

## Running the Application

### Development Mode

```bash
npm run dev
```

Application URL:

```text
http://localhost:3000
```

---

### Production Build

```bash
npm run build
npm start
```

---

## Running Cypress Tests

### Open Cypress UI

```bash
npx cypress open
```

### Run Tests Headlessly

```bash
npx cypress run
```

---

## Accessibility Reports

Accessibility reports are generated in:

```text
cypress/reports/accessibility-report.json
```

The report contains Axe-Core accessibility violations discovered during test execution.

---

## Mochawesome Test Reports

HTML reports are generated in:

```text
cypress/reports/mochawesome.html
```

---

## Docker Setup

### Build Docker Image

```bash
docker build -t accessible-profile-dashboard .
```

### Run Docker Container

```bash
docker run -d -p 3001:3000 accessible-profile-dashboard
```

---

## Docker Compose

Start application and Cypress tests:

```bash
docker compose up --build
```

This command:

1. Builds the application image
2. Starts the application container
3. Executes Cypress accessibility and navigation tests
4. Generates accessibility and HTML test reports

---

## Test Coverage

### Accessibility Tests

* Login page accessibility
* Dashboard accessibility
* Profile form accessibility
* Axe-Core WCAG validation

### Keyboard Navigation Tests

* Tab navigation
* Focus management
* Form interaction
* Logout functionality
* Enter key activation

---

## Mock Credentials

```text
Username: testuser
Password: password
```

---

## Accessibility Compliance

The application is tested using Axe-Core and Cypress to ensure:

* No critical accessibility violations
* No serious accessibility violations
* Keyboard accessibility
* Proper focus order
* Screen-reader-friendly markup

---

## Author

Developed as part of the "Build an Accessible User Profile Dashboard with Cypress and Axe-Core" project.
