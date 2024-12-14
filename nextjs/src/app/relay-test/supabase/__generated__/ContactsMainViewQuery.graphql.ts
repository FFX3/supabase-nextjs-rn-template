/**
 * @generated SignedSource<<91a622d0c6e6b8eda62f7015bc8bbdcc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContactsMainViewQuery$variables = Record<PropertyKey, never>;
export type ContactsMainViewQuery$data = {
  readonly profilesCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly email: string | null | undefined;
      };
    }>;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ContactsFragment">;
};
export type ContactsMainViewQuery = {
  response: ContactsMainViewQuery$data;
  variables: ContactsMainViewQuery$variables;
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
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ContactsMainViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "profilesConnection",
        "kind": "LinkedField",
        "name": "profilesCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "profilesEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "profiles",
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
        "storageKey": "profilesCollection(first:1)"
      },
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
    "name": "ContactsMainViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "profilesConnection",
        "kind": "LinkedField",
        "name": "profilesCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "profilesEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "profiles",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "profilesCollection(first:1)"
      },
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
                  (v1/*: any*/),
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
                  (v2/*: any*/)
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
    "cacheID": "867741f7a4c3f8b4d5e41afb77700b42",
    "id": null,
    "metadata": {},
    "name": "ContactsMainViewQuery",
    "operationKind": "query",
    "text": "query ContactsMainViewQuery {\n  profilesCollection(first: 1) {\n    edges {\n      node {\n        email\n        nodeId\n      }\n    }\n  }\n  ...ContactsFragment\n}\n\nfragment ContactsFragment on Query {\n  contactsCollection {\n    edges {\n      node {\n        id\n        email\n        first_name\n        last_name\n        nodeId\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9c333aae47c056ac073fd91f4abd3f71";

export default node;
