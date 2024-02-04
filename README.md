

<h1>The Movie Explorer Project</h1>
<br>

This is an application that allows users to search and view details about movies<br><br>
The project boilerplate was generated using [this Vite Template](https://vital.josepvidal.dev). The motivation was
mainly to take advantage of the combo Typescript + React + Vite + Tailwind + ESLint which I wanted to use.
For simplicity I removed Husky for linting commits.


## Features

- ⚡️ [React 18](https://beta.reactjs.org/)
- 🦾 TypeScript, 
- 🫀 [Vitest](https://vitest.dev/) - unitary testing made easy
- 🎨 [Tailwind with JIT](https://tailwindcss.com/) - next generation utility-first CSS
- 👑 [Atomic Design organization](https://bradfrost.com/blog/post/atomic-web-design/)
- 🗂 [Absolute imports](https://github.com/vitejs/vite/issues/88#issuecomment-762415200)
- 😃 [Hero icons](https://heroicons.com/)

### Coding Style

- [ESLint](https://eslint.org/) - configured for React/Hooks & TypeScript
- [Prettier](https://prettier.io/)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Commit lint](https://github.com/conventional-changelog/commitlint) - helps your team adhering to a commit convention


## Usage

### Development

Just run the command below and visit http://localhost:3000/

```bash
yarn dev
```

### Build

To build the App, run

```bash
yarn build
```

And you will see the generated file in `dist` that ready to be served.



## List of improvements or features to be added

- Options for choosing moving API : _OMDb API search is not the greatest and only provides a single result per text with exact search term. For that it would be nice to have a dropdown to choose between different APIs._
- Sorting features on Favorites List
- Save only imdbID and not the full object in localStorage: _since localStorage is limited to 5 MB, saving only the imdbID would be a better approach. I did not spend much time with this though because realistically we'd use a backend for such feature._ 