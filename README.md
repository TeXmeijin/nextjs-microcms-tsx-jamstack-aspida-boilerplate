This is a [Next.js](https://nextjs.org/) project bootstrapped with [`microCMS`](https://microcms.io/), [`aspida`](https://github.com/aspida/aspida). And this is using `TSX`, `Incremental Static Regeneration`.

This project will help you quickly implement JAMStack service with TypeScript-friendly.

## Getting Started Development

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What's microCMS?

`microCMS` is a headless CMS service in Japan. It is similar to such as strapi, Contentful, DatoCMS, and so on.

Let's create account of `microCMS` for free, and make one api that has `/articles` path and create first article content.

Then you can access the api by below command.

```bash
curl "https://<your-project-name>.microcms.io/api/v1/articles" -H "X-API-KEY: <your api key>"
```

## What's aspida?

Aspida is TypeScript friendly HTTP client wrapper for the browser and node.js.
          
Look `types/apiClient` directory.

Under the directory, you must define your backend API req/res types.
And, run the command `yarn build:api` and you will get `types/apiClient/$api.ts`.

Then, check `modules/apiClient.ts`. This initializes aspida client and export it. With optimizing for `microCMS` APIs.

You can get microCMS content by following code.

```typescript
const article = await apiClient.articles._cmsId(id).$get()
```

## Environments

You touch the env file. Called `.env.local`

```dotenv
MICROCMS_GET_API_KEY=<your-microcms-get-api-key>
MICROCMS_BASE_URL=https://<your-project-name>.microcms.io/api/v1
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Others
Since this project will be used in my job, the settings for `eslint` and `husky` are also completed. `CSS in JS` is not installed because there is no standard.

## Contribution
I'm not familiar with React and Next.js, so if you have any suggestions for resolving errors or better improvements, please contribute via issue or pull request.
