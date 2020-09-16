const fastify = require("fastify") ({ logger: true });
const fastJson = require("fast-json-stringify");

const stringify = fastJson({
    title: "User Schema",
    type: "object",
    properties: {
        id: {
            type: "integer",
        },
        username: {
            type: "string",
        },
    },
});


fastify.get("/users", async (req, reply) =>
{
    reply.send([{ id: 1, username: "Ricardo" }, { id: 2, username: "Gerardo" }]);
});

const start = async () =>
{
    try
    {
        await fastify.listen(8080);
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    }
    catch(e)
    {
        fastify.log.error(e);
        process.exit(1);
    }
};

start();