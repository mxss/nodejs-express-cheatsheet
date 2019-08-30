const PostController = require("./../controller/post/post_controller");
const PostCrudController = require("./../controller/post/post_crud_controller");

module.exports = {
    init(app) {
        app.get("/", (req, res) => {
            res.json({
                "data": {
                    "status": "ok",
                    "api_version": 1
                }
            });
        });

        // --- POSTS ---

        app.get("/api/v1/posts/get", PostController.getPosts);

        app.post("/api/v1/post/new", PostCrudController.create);

        app.patch("/api/v1/post/edit", PostCrudController.edit);

        app.delete("/api/v1/post/delete", PostCrudController.delete);
    }
};