# externalDir

In order to use code outside of a projects (for example common visual libraries) in `next.config.js` `externalDir` must be used such as 
```
experimental: {
	externalDir: true,
}
```
Why this flag is experimental see this [PR]('https://github.com/vercel/next.js/pull/22867') and this [issue]('https://github.com/vercel/next.js/issues/19928#issuecomment-741596557')