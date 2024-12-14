module.exports = {
  src: "./src",
  language: "typescript",
  excludes: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  schema: "../schema.graphql",
  schemaConfig: {
    nodeInterfaceIdField: 'nodeId',
    nodeInterfaceIdVariableName: 'nodeId',
  },
  customScalarTypes: {
    UUID: 'string',
    Datetime: 'string',
    JSON: 'string',
    BigInt: 'string',
    BigFloat: 'string',
    Opaque: 'any',
  },
}
