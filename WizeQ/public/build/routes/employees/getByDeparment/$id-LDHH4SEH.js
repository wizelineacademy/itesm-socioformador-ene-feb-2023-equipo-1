import {
  __commonJS,
  __toESM,
  init_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// empty-module:app/utils/db.server
var require_db = __commonJS({
  "empty-module:app/utils/db.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:routes\employees\getByDeparment\$id.js?browser
init_react();

// app/routes/employees/getByDeparment/$id.js
init_react();

// app/controllers/employees/list.js
init_react();
var import_db = __toESM(require_db());
var listEmployees = async (id) => {
  const idValue = parseInt(id, 10);
  const relations = await import_db.db.EmployeesDepartments.findMany({
    where: {
      department_id: idValue
    },
    distinct: ["email"],
    include: {
      users: true
    }
  });
  return relations.map((rel) => ({ name: rel.users.full_name, id: rel.employee_id }));
};
var list_default = listEmployees;

// app/routes/employees/getByDeparment/$id.js
var loader = async (data) => {
  const { params } = data;
  if (params.id === -1 || params.id === "undefined") {
    return [];
  }
  const employess = await list_default(params.id);
  return employess;
};
var id_default = loader;
export {
  id_default as default
};
//# sourceMappingURL=/build/routes/employees/getByDeparment/$id-LDHH4SEH.js.map
