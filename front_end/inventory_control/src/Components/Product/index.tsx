/*type Product = {
	name: string
	image: string
	value: number
	description: string
	quantity: number
}
*/
const Products = () => {
	return (
		<>
			<div>
				<div>
					<thead>
						<th>Foto</th>
						<th>Nome</th>
						<th>Preço</th>
						<th>Descrição</th>
						<th>Quantidade</th>
					</thead>
					<tbody>
						{/*product.map((item, i) => (
							<tr key={i}>
								<td>
									<img src={item.image} />
								</td>
								<td>{item.name}</td>
								<td>{item.value}</td>
								<td>{item.description}</td>
								<td>{item.quantity}</td>
							</tr>
						))*/}
					</tbody>
				</div>
				<div>
					<button type="button">Editar</button>
					<button type="button">Remover</button>
				</div>
			</div>
		</>
	)
}

export default Products
