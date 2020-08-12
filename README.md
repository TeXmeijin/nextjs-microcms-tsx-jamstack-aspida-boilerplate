This is a [Next.js](https://nextjs.org/) project bootstrapped with [`microCMS`](https://microcms.io/), [`aspida`](https://github.com/aspida/aspida). And this is using `TSX`, `Incremental Static Regeneration`.

This project will help you quickly implement JAMStack service with TypeScript-friendly.

## Set up

Run the development server:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TypeScript

This project is written in TypeScript. The configuration is `tsconfig.json`.

Page components are fully `.tsx`. And Next.js supported methods are also written in TypeScript.

For example, look at `pages/articles/[id].tsx`.

```typescript
export const getStaticProps: GetStaticProps<{ article: MicroCmsArticle }> = async (context: GetStaticPropsContext<{id: string}>) => {
  // ...
}
```

## Incremental Static Regeneration

This project supports [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration).

## What's microCMS?

`microCMS` is a headless CMS service in Japan. It is similar to such as strapi, Contentful, DatoCMS, and so on.

Let's create account of `microCMS` for free, and make one api that has `/articles` path and create first article content.

This sample uses `/articles` API in `microCMS`. Please make an API that has `/articles` path, and it has following properties: `title`, `body`, `description` (there are string types).

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

*Notice:* at local development, we can use [`aspida-mock`](https://github.com/aspida/aspida/tree/master/packages/aspida-mock). The library make us building mock server and response data by using same API as real backend APIs. Please look at `modules/apiClient.ts`.

You can get microCMS content by following code.

```typescript
const article = await apiClient.articles._cmsId(id).$get()
```

**Notice:** each you implement API types under `types/apiClient` directory, you must run `yarn build:api` command.

## Environments

You can touch the env file. Called `.env.local`

```dotenv
MICROCMS_GET_API_KEY=<your-microcms-get-api-key>
MICROCMS_BASE_URL=https://<your-project-name>.microcms.io/api/v1
```

Only this sample, aspida uses mock-server at local development. So the env file isn't needed. But you must set these env values at [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) console.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## ESLint
The settings for `eslint` and `husky` are also completed, but `CSS in JS` is not installed because there is no standard.

Of course, you can add and remove rules by editting `.eslintrc.js`.

## Contribution
I'm not familiar with React and Next.js, so if you have any suggestions for resolving errors or better improvements, please contribute via issue or pull request.

## Author

Twitter: [@Meijin_garden](https://twitter.com/Meijin_garden)
