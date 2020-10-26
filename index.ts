import server from "./server";

async function main() : Promise<void> {
    await server.setupExpress();
    await server.setupServer();
}

main();