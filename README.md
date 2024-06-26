# CHAOS

This repo is the source code CHAOS, my personal blog.

CHAOS is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), and later developed
with TypeScript and Tailwind CSS.

## Create Your Own

This repo is set as a template (it may need some refactor in the future to be simpler to use though). If you want to use
it to create your own blog, just [use template](https://github.com/WHALEEYE/chaos/generate) to generate your own repo.

## Getting Started

You can run this project with `yarn` (recommended) or `npm`.

### Yarn

This project uses the next version of yarn. Therefore, it's important to install yarn according to the [official guide](https://yarnpkg.com/getting-started/install).

After installing yarn, make sure `yarn` is set to the newest version globally (this can be skipped, but recommended for compatibility).

```bash
# execute this outside the project dir
yarn set version berry
```

Then execute the following command in project dir to install the dependencies.

```bash
yarn install
```

Then you can run the development server.

```bash
yarn dev
```

> You may noticed that the setting up of `yarn` has much more steps. Yes, that's because we believe newer is better,
> and in the same time `yarn` is more elegant. If you prefer a VERY quick setup, `npm` would be a better choice.

### Npm

If you choose npm, you need to install the dependencies first.

```bash
npm install
```

Then you can run the development server:

```bash
npm run dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Version Checkpoints

### 🎉 Version 0.0

- [x] Navigation Bar

- [x] Left Information Block

- [x] Pages
  - [x] Profile
  - [x] Articles
  - [x] Talks
  - [x] Friends (Need a Friend to Test Though😢)

- [x] Blog Content
    - [x] Compile from Markdown to HTML
    - [x] Adjusted Style of Components

### 🎉 Version 1.0

- [x] Fit Different Resolutions on Desktop Side
- [x] Article Covers
- [x] Bilingual Support

### 👨‍💻 Version 2.0

- [ ] Custom Components in Blog
- [x] Custom Blog Meta Info
- [ ] Page Division

### 🔮 Version 3.0

- [ ] Refactor
- [ ] Night Mode
- [ ] Mobile Support

### 🔮 Version 4.0

- [ ] Search Support
- [ ] Sort Modification
