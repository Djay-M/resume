const { paragrap } = require("../config/constants");

exports.fetchDetailedDescriptionIds = () => {
  let idObject = {};
  paragrap.projects.workProjects.forEach(
    (project) => (idObject[`popOverState-${project.title}`] = false)
  );
  paragrap.projects.personalProjects.forEach(
    (project) => (idObject[`popOverState-${project.title}`] = false)
  );
  return idObject;
};
