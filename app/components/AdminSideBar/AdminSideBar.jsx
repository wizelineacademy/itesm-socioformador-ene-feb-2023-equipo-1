/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import * as Styled from 'app/components/AdminSideBar/AdminSideBar.Styled.jsx';

function SideBar({ departments, selectedDepartment, handleSelectDepartment }) {
  return (
    <Styled.MainContainer>
      <Styled.DepContainer>
        <Styled.TitleDep>Departaments</Styled.TitleDep>

        <Styled.ListDep>
          {departments.map((item) => (
            <Styled.DepSelect
              key={item.name}
              aria-current={item.current ? 'page' : undefined}
              onClick={() => handleSelectDepartment(item.department_id)}
              selected={item.department_id === selectedDepartment}
            >
              {item.name}
            </Styled.DepSelect>
          ))}
        </Styled.ListDep>
      </Styled.DepContainer>
    </Styled.MainContainer>
  );
}

export default SideBar;
