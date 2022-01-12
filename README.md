# Web app of WYT ( What you thinking?).

This repository is part of my WYT.com project, is just an application to give recommendations of movies, books, tv-shows and music.

## 1: First design.
These designs were maded in figma
> [Look the complete figma project](https://www.figma.com/file/RFkqSGe0b6GzotQu4P72uh/WYT.com?node-id=1%3A913)

Main page:
<p>
  <img src="rdImg/img1.png"height="180" />
</p>

Profile:
<p>
  <img src="rdImg/img2.png" height="180" width="280" />
</p>

## 2: Technologies
- ReactJS
- Storybook
- styled-components
- axios

## 3: Requirements
You also need nodeJS, this project was made on version 16 of node.

## 4: Clonar y ejecutar el proyecto.
- Clone the repository
  ```bash
  clon de git https://github.com/germanruzca/wyt-frontend.git
  ```

- Install dependencies
  ```bash
  npm install
  ```
- Run project
  ```bash
  npm start
  ```

## 5: Explaning the project.
This is the frontend part of a aplication, the backend ([nodeJS/express](https://github.com/germanruzca/wyt-backend)) could be find in this link.

This application will receive the data from the api, the api to get the data needs a accessToken, when you generate the accessToken (login in backend) you need to copy and paste it in -> [here](src/utils/accessToken.js) <-

> I know sounds weird, but this project will updating.


You can look for the storyboks with the command:
```bash
npm run storybook
```

## 6: Thoughts
This application is not finished yet, here some points to do:
- Storage the access token.
- Finish the User page.
- Login form.
- SignUp form.
- Errors administration.
- Publish a new post on the app.
- Improve the axios tool in the project.
- So on...