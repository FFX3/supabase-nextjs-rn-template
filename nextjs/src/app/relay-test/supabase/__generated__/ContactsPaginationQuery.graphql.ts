/**
 * @generated SignedSource<<e3d2bca75c3da3d845e6c753d5286d6a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContactsPaginationQuery$variables = Record<PropertyKey, never>;
export type ContactsPaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ContactsFragment">;
};
export type ContactsPaginationQuery = {
  response: ContactsPaginationQuery$data;
  variables: ContactsPaginationQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ContactsPaginationQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ContactsFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ContactsPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "contactsConnection",
        "kind": "LinkedField",
        "name": "contactsCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "contactsEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "contacts",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "email",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "first_name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "last_name",
                    "storageKey": null
                  },
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f542d1ad7a0c8329991f11c0b6e2130d",
    "id": null,
    "metadata": {},
    "name": "ContactsPaginationQuery",
    "operationKind": "query",
    "text": "query ContactsPaginationQuery {\n  ...ContactsFragment\n}\n\nfragment ContactsFragment on Query {\n  contactsCollection {\n    edges {\n      node {\n        id\n        email\n        first_name\n        last_name\n        nodeId\n      }\n    }\n  }\n}\n"
  }
};

(node as any).hash = "c2c9090d33801e01f2a129f7674c37a0";

export default node;
