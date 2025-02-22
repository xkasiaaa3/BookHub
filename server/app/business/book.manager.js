import bookDAO from "../DAO/bookDAO";

function create(context) {
  async function query() {
    let result = bookDAO.query();
    if (result) {
      return result;
    }
  }

  async function get(id) {
    let result = await bookDAO.get(id);
    if (result) {
      return result;
    }
  }

  async function createNewOrUpdate(data) {
    let result = await bookDAO.createNewOrUpdate(data);
    if (result) {
      return result;
    }
  }

  async function remove(id) {
    let result = await bookDAO.remove(id);
    if (result) {
      return result;
    }
  }

  return {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
    remove: remove,
  };
}

export default {
  create: create,
};
