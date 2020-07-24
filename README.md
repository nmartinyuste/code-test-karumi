# CodeTestKarumi

## Configure Project

1. Clone repository `git clone https://github.com/nmartinyuste/code-test-karumi.git`
2. Enter `cd code-test-karumi`
3. Run `npm ci`

## Local Server

Run `npm run code-test-karumi` to run whole project. Navigate to `http://localhost:4200/`.
Test it using correct and incorrect users (set behind in API Login Server > Testing).

## Web Login

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

### Local server

Run `npm run web` for a local server. Navigate to `http://localhost:4200/`. This configuration is not connected to API local, only for UI visualization.

### Build

Run `npm run build:ci` to build the project. The build artifacts will be stored in the `web/dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `npm run test:ci` to execute the unit tests via [Karma](https://karma-runner.github.io). Non headless option.
Run `npm run test:ci --headless` to execute the unit tests via [Karma](https://karma-runner.github.io). Headless option.

### Code coverage

After running unit tests, code coverage artifacts will be stored in the `web/coverage/` directory. Open `index.html` to see results.

## API Login Server

This project uses NodeJS.

## Local server

Run `npm run api` for a local server. API will initialize in `http://localhost:3000/`.

## Testing

1. Open `Postman` to test API.
2. Create URL POST method typing `http://localhost:3000/auth/login`.
3. Go to `body > raw > JSON` and add in the body the following structure: {username: 'XXXX', password: 'YYYY'}
4. Send correct requests to receive user response.
5. Send incorrect requests to receive invalid credentials error.

> Correct users: {username: 'user1', password: 'password1'}, {username: 'user2', password: 'password2'}, {username: 'user3', password: 'password3'}

## CI GitHub Action Bot

Included action bot on push actions. Steps:

1. Install dependencies `npm ci`
2. Build web project running `npm build:ci`
3. Run headless unit web tests `npm run test:ci-headless`
4. If builds success generate artifact and upload it to GitHub
5. Upload code coverage results artifact to GitHub

To review these artifacts, go to actions, click on latest CI job, go to artifacts, download and review them.

## Issue Templates

### Feature request

To request a new feature.

### Improvement request

To request a change from existing feature.

### Bug report

To report any bug.

## Pull Request Templates

To explain changes included in request, testing steps...
