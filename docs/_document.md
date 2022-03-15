# Custom _document

A custom `Document` can update the `<html>` and `<body>` tags used to render a [Page](https://nextjs.org/docs/basic-features/pages). This file is only rendered on the server, so event handlers like `onClick` cannot be used in `_document`.

The default `Document`, has been overriden with `libs/defaults/document/index.tsx` to use unified `_document` configuration in multiple projects.

Custom `Document` provides api for heads customization such as <link>, <meta> and other tags.

Also `Document` does not support and data fetching methods such as `getStaticProps` or `getServerSideProps`.

Documentation reference for [`_document`](https://nextjs.org/docs/advanced-features/custom-document).
