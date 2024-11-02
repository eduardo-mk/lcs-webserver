# Vero varela nutricion

## Webserver

Note: To spin up the local server you need to install also the related backend services and install Postgres otherwise this project will not work.

| **Component** | **Repository**                                           |
| ------------- | -------------------------------------------------------- |
| **Backend**   | [lcs-backend](https://github.com/eduardo-mk/lcs-backend) |
| **Database**  | [lcs-db](https://github.com/eduardo-mk/lcs-db)           |

For more information, please contact: [eduardo-mk](https://github.com/eduardo-mk)

## Technology stack

| **Component**   | **Technology**         |
| --------------- | ---------------------- |
| **Database**    | Postgres               |
| **Middleware**  | NodeJS with Typescript |
| **Payments**    | Stripe                 |
| **Data Layer**  | API fetch and GraphQL  |
| **UI**          | NextJS                 |
| **UI Sessions** | OAuth with Google      |
| **Styles**      | Tailwind               |
| **Deployment**  | Digital Ocean          |
| **DevOps**      | Dokku + Nginx          |

### Install

```bash
npm i
```

### Start server

```bash
npm run dev
# or
yarn dev
```
