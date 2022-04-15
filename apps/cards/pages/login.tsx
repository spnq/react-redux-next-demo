import { Login } from './../components/pages/login/Login';

function LoginPage() {
	return <Login />;
}

export default LoginPage;

export async function getStaticProps() {
	return {
		props: {}
	};
}