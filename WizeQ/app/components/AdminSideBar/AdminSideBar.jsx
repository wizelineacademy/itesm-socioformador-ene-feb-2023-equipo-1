import * as Styled from "app/components/AdminSideBar/AdminSideBar.Styled.jsx";

const navigation = [
	{ name: "General", href: "#", current: false },
	{ name: "Software", href: "#", current: false },
	{ name: "Marketing", href: "#", current: false },
	{ name: "Administrative", href: "#", current: false },
	{ name: "HR", href: "#", current: false },
	{ name: "Finance", href: "#", current: false },
	{ name: "Logistics", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Management", href: "#", current: false },
];

function SideBar() {
	return (
		<Styled.MainContainer>
			<Styled.DepContainer>
				<Styled.TitleDep>Departaments</Styled.TitleDep>

				<Styled.ListDep>
					{navigation.map((item) => (
						<Styled.DepSelect
							key={item.name}
							href={item.href}
							aria-current={item.current ? "page" : undefined}>
							{item.name}
						</Styled.DepSelect>
					))}
				</Styled.ListDep>
			</Styled.DepContainer>
		</Styled.MainContainer>
	);
}

export default SideBar;
