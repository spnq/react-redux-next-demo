# Custom Error Handlers

There are several ways to handle error on both Server Side and Client Side.

### try-catch block

```ts 
import Error from 'next/error';

function Page({statusCode, stars}: {statusCode: number, stars: number}) {
  
	if(statusCode !== 200) {
		<Error statusCode={statusCode} />;
	}
  
	return <div>{stars}</div>;
}

Page.getInitialProps = async () => {
  
	try{
		const res = await fetch('https://api.github.com/repos/vercel/next.js');
		const json = await res.json();
    
		if(res.status >= 400){
			return { stars: json.stargazers_count, statusCode: res.status };
		}
    
		return { stars: json.stargazers_count, statusCode: 200 };
   
    
	} catch(error){
    
		return {stars: null, statusCode: 503};
	}
  
};

export default Page; 
```

### Custom 404 and 500 pages

Both pages can be customized by creating `500.tsx` and `404.tsx` provided in `pages` directory.

```ts
// pages/500.tsx
export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>
}
```

```ts
// pages/404.tsx
export default function Custom404() {
  return <h1>404 - Page Not Found</h1>
}
```

### Custom `_error.tsx` page

500 errors are handled both client-side and server-side by the Error component. 

Error component can be redefined like:

```ts
import { NextPageContext } from 'next';

interface ErrorComponentProps {
	statusCode?: number;
}

function Error({ statusCode } : ErrorComponentProps) {
	return (
		<p>
			{statusCode
				? `An error ${statusCode} occurred on server`
				: 'An error occurred on client'}
		</p>
	);
}

Error.getInitialProps = ({ res, err } : NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
```