import app from "./app";
import models from "./models/index";

const NAME = `server`;
import Debug from "debug";
const debug = Debug(NAME);

function main() {
  /** Server start */
  const server = app.listen(app.get("port"), () => {
    /** Get current port of listening */
    const portListen = server.address();
    if (portListen !== null) {
      const bind =
        typeof portListen === "string"
          ? "Pipe " + portListen
          : "Port " + portListen.port;

      console.log("Express server listening on " + bind);

      /** Do something after listen */
      listenHandler().then();
    } else {
      console.error("[E] Express server listening failed.");
    }
  });
}

main();

/**
 * Handler after listen
 */
async function listenHandler() {
  /** Check db connection */
  const isConnected = await dbCheck();
  console.log(`[I] [db] ${isConnected ? "is" : "is not"} connected.`);

  /** Read sync options */
  const sync = process.env.SYNC;
  const force = process.env.FORCE;
  console.log("Sync models to tables? ", sync ? "Yes" : "No");
  console.log("Drop and recreate tables? ", force ? "Yes" : "No");

  /** Sync models if nessary */
  sync ? await models.sequelize.sync({ force: !!force }) : null;

  console.log("[I] [db] [sync] done.");
}

/**
 * Check db connection
 */
async function dbCheck() {
  try {
    await models.sequelize.authenticate();
    return true;
  } catch (error) {
    console.log("[E] [dbCjeck]: ", error);
    return false;
  }
}
