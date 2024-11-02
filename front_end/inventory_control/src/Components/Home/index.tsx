const Home = () => {
	return (
		<>
			<div>
				<h2>Login</h2>
				<div>
					<label htmlFor="user">User</label>
					<input id="user" type="text" />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input id="password" type="text" />
				</div>
				<button type="button">Entrar</button>
			</div>

			<div>
				<h2>Register</h2>
				<div>
					<label htmlFor="user_">User</label>
					<input id="user_" type="text" />
				</div>
				<div>
					<label htmlFor="password_">Password</label>
					<input id="password_" type="text" />
				</div>
				<button type="button">Cadastre-se</button>
			</div>
		</>
	)
}

export default Home
