/**
 * @generated SignedSource<<99665d45349960535863073a20688502>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type mainViewQuery$variables = Record<PropertyKey, never>;
export type mainViewQuery$data = {
  readonly usersCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly email: string | null | undefined;
      };
    }>;
  } | null | undefined;
};
export type mainViewQuery = {
  response: mainViewQuery$data;
  variables: mainViewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "mainViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "usersConnection",
        "kind": "LinkedField",
        "name": "usersCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "usersEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "users",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "usersCollection(first:1)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "mainViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "usersConnection",
        "kind": "LinkedField",
        "name": "usersCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "usersEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "users",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "nodeId",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "usersCollection(first:1)"
      }
    ]
  },
  "params": {
    "cacheID": "04d581484fdc53ffdb4efa0bf893f21f",
    "id": null,
    "metadata": {},
    "name": "mainViewQuery",
    "operationKind": "query",
    "text": "query mainViewQuery {\n  usersCollection(first: 1) {\n    edges {\n      node {\n        email\n        nodeId\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2fa613e9f474396afa961ae0d0a68fdf";

export default node;
