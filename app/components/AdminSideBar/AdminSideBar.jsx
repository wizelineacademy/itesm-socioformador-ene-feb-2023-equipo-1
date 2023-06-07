import * as Styled from 'app/components/AdminSideBar/AdminSideBar.Styled.jsx';
import PropTypes from 'prop-types';
import React from 'react';

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
              className={item.department_id === selectedDepartment ? 'selected' : ''}
            >
              {item.name}
            </Styled.DepSelect>
          ))}
        </Styled.ListDep>
      </Styled.DepContainer>
    </Styled.MainContainer>
  );
}

SideBar.propTypes = {
  departments: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
  selectedDepartment: PropTypes.number,
  handleSelectDepartment: PropTypes.func.isRequired,
};

SideBar.defaultProps = {
  departments: [],
  selectedDepartment: undefined,
};

export default SideBar;
