const { ulid } = require("ulid");

function generateId(prefix = "") {
  const id = ulid(); // 26-character unique, sortable ID
  return prefix ? `${prefix}_${id}` : id;
}

module.exports = {
  generateId,
};
