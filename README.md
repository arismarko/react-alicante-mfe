# Next.js with Module Federation

Module Federation in Next.js depends on <a href="https://app.privjs.com/buy/packageDetail?pkg=@module-federation/nextjs-ssr">@module-federation/nextjs-ssr</a> It will not work unless you have access to this plugin, which is not free. (at this point in time, the SSR plugin is a closed beta)

Due to the effort to support Next.js and funding constraints, I have moved all next.js Federation software to a commercial software model.

## Getting Started

1. run `npm install @module-federation/nextjs-ssr --registry https://r.privjs.com` with npm 7 (yarn probbably better) or install it directly in each folder/app, note the plugin is not free.
2. run `yarn start` and browse to `http://localhost:3001`

# We are available to consult

Contact me <a href="mailto:zackary.l.jackson@gmail.com">zackary.l.jackson@gmail.com</a> or <a href="https://twitter.com/scriptedalchemy">@ScriptedAlchemy</a> on Twitter

All solutions for next.js currently require a paid access or paid plugin

## How it works?!

This implementaion leverages our propriatery _Software Streams_ which allow me to stream commonjs modules at runtime to consuming apps.
We have never made software streaming avaliable to the general public, while we have used it for 2 years and run several backends off the technology - its remained a heavily guarded secret. Software Streams is how SSR works, on the client side we are using enhanced federation interfaces to ensure that the top-level api works as expected.

It should allow `import()`, `require`, `import from` to work - this has been tested serverside but i have not yet tested anything else other than import() on the client.

There has been a leaked copy of an alpha from a year and a half ago for software streams. While it does work, there are several security flaws. The federation group has spend signigicant amounts of time enhancing streaming.

In the future, when this plugin is out of beta - we are planning to build in stream encryption to ensure that code streamed has not been manipulated in any way.
This would rely on a salted cypher key that consumer and remote would know at build time.

We are also looking into running streamed software in a WASM isolate that cannot perform any damage, has no access to host resources. This would make it possible to execute untrusted code.

For the time being - I strongly suggest only federating trusted software between servers.

## Security

In order to make this plugin work right out the box, the commonjs modules are exposed via `_next/static/ssr*` i strongly suggest having a CDN or piece of middleware that only allows access to this path from internal network or VPN. You do not want the public internet to be able to reach that path. You are exposing server code, where `process.browser` is not applied to tree shake server secrets since this is server code.

## Context

We have three next.js applications

- `itemcatalogue` - port 3000
- `home` - port 3001
- `orders` - port 3002

The applications utilize omnidirectional routing and pages or components are able to be federated between applications like a SPA

I am using hooks here to ensure multiple copies of react are not loaded into scope on server or client.

The omnidirectional routing now hooks into webpack federation loading functions, so when dynamically loading remotes - you can use the same functions that webpack uses to load remotes when theres a know static import like `home/title`

I am using hooks here to ensure multiple copies of react are not loaded into scope on server or client.

### Sharing

Next.js has all its internal modules pre-shared vis `@module-federation/nextjs-ssr` you do need to share react via the plugin in order to ensure that the share scope runtime requirements are included - since you cannot share modules in a normal manner, like nextjs internls, the pre-shared modules are attached at runtime to the share scope. Any exta code you share is processed via the plugin which reconfigures sharing properly to work with next.js limitations.

The sharing limit is due to next not having any async boundary, theres no way to "pause" the application while webpack orchestrates share scope.

I am investigating new methods that may solve the module sharing problem in next.js, however this is a complex problem to solve and requires enormus amounts of knowladge around how webpack and federation work inside the module graph.
