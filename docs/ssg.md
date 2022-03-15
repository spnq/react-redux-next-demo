# SSG

If a page uses Static Generation (`getStaticProps`), the HTML page is generated at build time. That means in production, the HTML page is generated when you run `next build`. 

For example if some data was fetched in `getStaticProps` it will not be fetch during every request in production. Rather it will be fetch once on compile time, meaning the content of the static page can be different on every build depending on server response.

During development (`next dev`) all fetch calls inside `getStaticProps` will be performed on every request.