import business from "../business/business.container";

const bookEndpoint = (router) => {
  router.get("/api/books", async (req, res) => {
    try {
      let result = await business.getBookManager().query();
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/api/book/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const result = await business.getBookManager().get(id);
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send("Book not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("An error occurred");
    }
  });

  router.post("/api/book", async (request, response, next) => {
    try {
      let result = await business
        .getBookManager()
        .createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });
};
export default bookEndpoint;
