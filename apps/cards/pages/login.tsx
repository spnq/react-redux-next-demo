import { Login } from '../components/pages/login/login';

function LoginPage() {
	return <Login />;
}

export default LoginPage;

export async function getStaticProps() {
	return {
		props: {}
	};
}