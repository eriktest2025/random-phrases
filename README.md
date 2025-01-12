This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Random Phrases Dockerized Project

This is a project that give you a random phrase each time that you make a click on the button, fully containerized using Docker.

## Prerequisites

- Docker version 27.3.1 or higher.
- Docker Compose version v2.29.7 or higher.


## How to Install and Run

### Clone this repository:

```bash
git clone https://github.com/eriktest2025/random-phrases.git
cd random-phrases
```

### Build the Docker image:

```bash
docker build -t random-phrases .
```

### Start the container in development mode:

```bash
docker build -t random-phrases  .
docker run -p 3000:3000 random-phrases 
```

### Access the application:

Open your browser and navigate to:

```
http://localhost:3000
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
