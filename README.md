# Express Boilerplate.

This is a boilerplate project used for starting new projects.

## Set up

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone << BOILERPLATE-URL >> << NEW-PROJECTS-NAME >>`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` (then it will be ignored by git and read by the express server) `mv example.env .env`
6. Change the `"name"` in `package.json` to `<< NEW-PROJECT-NAME >>` instead of `"express-boilerplate`..."name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

Run the test with a watcher `npm t -- --watcher`

## Deploying

When your new project is ready for deployment, add a new Heroku application with command `heroku create`. This will make a new git remote called "heroku." You can then `npm run deploy`, which will push to the remote's master branch.