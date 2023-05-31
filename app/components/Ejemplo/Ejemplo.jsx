import Button from "app/components/Atoms/Button";
import * as Styled from "app/components/Filters/Filters.Styled";

import {
	SORTING_OPTIONS,
	DEFAULT_SORTING_OPT,
	SORTING_ACCESS_VALUE,
	DEPARTMENT_OPTIONS,
	DEFAULT_DEPARTMENT_OPT,
	DEPARTMENT_LABEL,
	DEPARTMENT_ACCESS_VALUE,
	TEXT_BUTTON,
} from "app/utils/constants";

function Ejemplo(props) {
	const { modifyQuery, clearFilters } = props;

	const { departments } = useLoaderData();

	const [searchParams] = useSearchParams();

	const getDefaultStatus = () => {
		const searchParam = searchParams.get("status");
		if (searchParam) {
			const found = STATUS_OPTIONS.find(
				(status) => status.value === searchParam
			);
			if (found) return found;
		}

		return DEFAULT_STATUS_OPT;
	};

	const getDefaultSortOption = () => {
		const searchParam = searchParams.get("order");
		if (searchParam) {
			const found = SORTING_OPTIONS.find(
				(order) => order.value === searchParam
			);
			if (found) return found;
		}

		return DEFAULT_SORTING_OPT;
	};

	const getDefaultDepartmentOption = () => {
		const searchParam = parseInt(searchParams.get("department"), 10);
		if (searchParam !== undefined) {
			const found = DEPARTMENT_OPTIONS.find(
				(option) => option.department_id === searchParam
			);
			if (found) return found;
			const foundInData = departments.find(
				(department) => department.department_id === searchParam
			);

			if (foundInData) return foundInData;
		}

		return DEFAULT_DATE_RANGE_OPT;
	};

	const [selectedDepartment, setSelectedDepartment] = useState(
		getDefaultDepartmentOption()
	);

	useEffect(() => {
		if (selectedDepartment.name === DEFAULT_DEPARTMENT_OPT.name) {
			setShowClearButton(false);
		} else {
			setShowClearButton(true);
		}
	}, [selectedDepartment]);

	const selectDepartmentFilter = (selectDepartment) => {
		setSelectedDepartment(selectDepartment);
		if (selectDepartment.department_id === -1) {
			modifyQuery("department", undefined);
		} else {
			modifyQuery("department", selectDepartment.department_id);
		}
	};

	const departmentFilterConfig = {
		elements: [...DEPARTMENT_OPTIONS, ...departments],
		text: selectedDepartment.name,
		label: DEPARTMENT_LABEL,
		onSelectFunc: selectDepartmentFilter,
		selectedValue: selectedDepartment.department_id,
		isHihlighted: selectedDepartment !== DEFAULT_DEPARTMENT_OPT,
		accessValueName: DEPARTMENT_ACCESS_VALUE,
	};

	return (
		<Styled.Filters>
			<Styled.FiltersLine secondary visibility="none" />
			<Styled.FiltersWrapper hideComponent={!showFilters ? "none" : "block"}>
				<Styled.FiltersContainer>
					<Styled.FiltersField departments>
						<CustomDropdown {...departmentFilterConfig} />
					</Styled.FiltersField>
				</Styled.FiltersContainer>
			</Styled.FiltersWrapper>
		</Styled.Filters>
	);
}

Filters.propTypes = {
	clearFilters: PropTypes.func.isRequired,
	modifyQuery: PropTypes.func.isRequired,
};

export default Ejemplo;
