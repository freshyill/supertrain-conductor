[![Netlify Status](https://api.netlify.com/api/v1/badges/54025ab0-7bd2-4481-91fe-fc61d4a57f6c/deploy-status)](https://app.netlify.com/sites/supertrain-conductor/deploys)

# Supertrain Conductor

## What is it?

A simple starting point for building a static site using the [Eleventy](https://www.11ty.io/) static site generator, with [Netlify CMS](https://www.netlifycms.org/) baked-in, ready to deploy to [Netlify](https://www.netlify.com) in a couple of clicks.

This project is *very* heavily based on [Eleventy Netlify Boilerplate](https://eleventy-netlify-boilerplate.netlify.com//), which is based on the [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog). 

## Differences from Eleventy Netlify Boilerplate

The biggest difference is that is adds a few features that I plan to personally use, such as Gulp processing for Sass and basic Javascript.

### Gulp

Everybody is going to have different preferences, but I'm almost always going to want Sass. It's not even fancy. This includes the most basic pipeline possible for turning Sass into CSS.

### Literally zero style preferences

There's just one Sass file and one partial, which really just serve to show that things are actually working. Every site I build is different, so I don't want to have to start by ripping a bunch of stuff out.

### Basic JS processing

This uses Gulp to concatenate and uglify Javascript. It uses [gulp-terser](https://www.npmjs.com/package/gulp-terser) to add JS uglifying and lots of other features of [terser-js](https://github.com/terser-js/terser).

### Environment variables

Running `yarn run watch` sets an `ELEVENTY_ENV=development` environment variable to allow for local differences, such as loading CSS from a `link` tag instead of an inlineed `style` tag. This lets BrowserSync reload styles directly.

Access it with `siteTools.env`. See `_data/siteTools.js` for more.

### package.json scripts

A few changes from Eleventy Netlify Boilerplate to suit my preferences

## Features (of Eleventy Netlify Boilerplate)

* Sample pages and blog with tag support
* Netlify CMS with editor previews
* CSS 2kb minified, inlined for fastest page render
* Pre-builds and minifies your HTML
* Uses Markdown files for content
* Uses Liquid and/or Nunjucks templates for layout
* 100% Javascript framework free
* Optional pipeline for minified inline JS
* Continuous Deployment workflow via Netlify

## Want to try it out now?

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/freshyill/supertrain-conductor&stack=cms)

Clicking the button above will deploy a copy of the demo website to your Netlify account (you can create an account during this process if you don't have one) and everything needed for running the CMS:

* A new repository in your GitHub account with the code
* Full Continuous Deployment to Netlify's global CDN network
* Control users and access with Netlify Identity
* Manage content with Netlify CMS
* Process form data with Netlify Forms

### Set up authentication

After deploying this project, Netlify Identity will add you as a CMS user and will email you an invite. It is not necessary to accept this invite if you wish to use an [OAuth provider](https://www.netlify.com/docs/identity/#external-provider-login) (e.g. Github) to manage authentication for your CMS. It is recommended to use this method of authentication as it removes the need for an email & password to log in to the CMS and is generally more secure. You will need to add an OAuth provider in your Netlify app settings under `"Settings" > "Identity" > "External providers"`.

Once you've added an OAuth provider, navigate to `/admin` on your site, select your provider from the list, and you should then be logged into your CMS. Cool huh?

Now you're all set, and you can start editing content!

## Gotchas

If you change the repo that was created at deploy time from public to private, you'll need to regenerate your token, as the token generated using the deploy to Netlify button can only access public repositories. To regenerate your token, head to "Settings" in your Netlify site dashboard, go to the "Identity" section, then scroll to "Services" where you'll see an "Edit settings" button. Click that and you'll
see a text link to "Generate access token in GitHub".

If you need any help with setting up Netlify CMS, you can reach out to the Netlify team in the [Netlify CMS Gitter](https://gitter.im/netlify/netlifycms).

## Local development

### 1. Clone this repository:

```
git clone https://github.com/freshyill/supertrain-conductor.git my-blog-name
```

### 2. Navigate to the directory

```
cd my-blog-name
```

Specifically have a look at `.eleventy.js` to see if you want to configure any Eleventy options differently.

### 3. Install dependencies

```
yarn install
```

### 4. Edit _data/metadata.json

This file contains your site title and author details.

### 5. Run scripts

```
yarn run watch
```

This runs the Gulp tasks once to make generated files available to Eleventy, and then runs Eleventy, Gulp, and BrowserSync to watch for changes. Any changes you make will be automatically updated in your browser.

This also sets an `ELEVENTY_ENV=development` environment variable to allow for local differences, and to help with BrowserSync reloading of styles. Access it with `siteTools.env`. See `_data/siteTools.js` for more.

```
yarn build
```

This builds the site once. This is also the default build command specified in the netlify.toml file, meaning it will run when you deploy a site to Netlify.

```
DEBUG=* npx eleventy
```

This will produce all kinds of somewhat useful information.

## Bug reports, feature requests, etc

I forked this to add a few things to Eleventy Netlify Boilerplate that I will always want when spinning up a new site. If you find it useful, I'm happy to accept pull requests. I'm filing my own todo items and technical debt as issues as well, to help document what's needed.

If you need any help with setting up Netlify CMS, you can reach out to the Netlify team in the [Netlify CMS Gitter](https://gitter.im/netlify/netlifycms).
