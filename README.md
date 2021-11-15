# Storybook Configuration with TypeScript, Next.js, Tailwind CSS, and Webpack5

## Installation Guide (From empty repository)

1. Clone https://github.com/theodorusclarence/ts-nextjs-tailwind-starter
2. Init Storybook
    ```bash
    npx sb init --builder webpack5
    ```
3. Install additional package for postcss config
    ```bash
    yarn add -D @storybook/addon-postcss
    ```
4. On .storybook/main.js, change it to [this file](https://github.com/theodorusclarence/storybook-tsnext-tw/blob/main/.storybook/main.js)
5. On .storybook/preview.js, change it to [this file](https://github.com/theodorusclarence/storybook-tsnext-tw/blob/main/.storybook/preview.js)

    Your Tailwind css file is supposed to be imported in preview.js
    
6. Add this to package.json as a requirement to fix bug of Webpack 5
    ```json
    "resolutions": {
      "webpack": "5"
    },
    ```
    
    then run `yarn` to install deps
    
7. Add this to package.json to allow accessing public folder
    ```json
    "storybook": "start-storybook -p 6006 -s ./public",
    "build-storybook": "build-storybook -s public",
    ```
    
    
## Vercel Deployment

Deploy to vercel with this additional config

![image](https://user-images.githubusercontent.com/55318172/141732077-5d28b730-05b2-4609-930b-c8f305f39df5.png)
