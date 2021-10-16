const getFilterdDepartments = (locationInputValue, departments) => {
  const filteredDepartments = departments.filter((department) => (
    department.nom.toLowerCase().includes(locationInputValue.toLowerCase())
  ));
  return filteredDepartments;
};

export default getFilterdDepartments;
