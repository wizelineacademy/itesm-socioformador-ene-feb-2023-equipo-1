import * as Styled from "app/components/AdminSideBar/AdminSideBar.Styled.jsx";
import React, { useEffect, useState } from "react";

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

function SideBar({ departments }) {
	return (
		<Styled.MainContainer>
			<Styled.DepContainer>
				<Styled.TitleDep>Departaments</Styled.TitleDep>

				<Styled.ListDep>
					{departments.map((item) => (
						<Styled.DepSelect
							key={item.name}
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
