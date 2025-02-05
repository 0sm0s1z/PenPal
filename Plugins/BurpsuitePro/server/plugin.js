import { loadGraphQLFiles, resolvers } from "./graphql/index.js";
import { SETTINGS_STORE } from "./constants.js";

const settings = {
  configuration: {
    schema_root: "BurpsuiteProConfiguration",
    getter: "getBurpsuiteProConfiguration",
    setter: "setBurpsuiteProConfiguration",
  },
  /*n8n: {
    displayName: "Burpsuite Pro",
    name: "burpsuitePro",
    icon: "fa:question-circle",
    description: "Interact with the PenPal Burpsuite Pro plugin",
    properties: [
      {
        displayName: "Operation",
        name: "operation",
        type: "options",
        options: [
          {
            name: "Vulnerability scan",
            value: "vuln_scan",
            description: "Start a vulnerability scan of the input URL"
          }
        ]
      }
    ]
  },*/
  datastores: [
    {
      name: SETTINGS_STORE,
    },
  ],
};

const BurpsuiteProPlugin = {
  async loadPlugin() {
    const types = await loadGraphQLFiles();

    return {
      graphql: {
        types,
        resolvers,
      },
      settings,
    };
  },
};

export default BurpsuiteProPlugin;
