/**
 * @generated SignedSource<<157623e6d69ca53049cddfca66f60f6a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContactsFragment$data = {
  readonly contactsCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly email: string | null | undefined;
        readonly first_name: string | null | undefined;
        readonly id: number | null | undefined;
        readonly last_name: string | null | undefined;
      };
    }>;
  } | null | undefined;
  readonly " $fragmentType": "ContactsFragment";
};
export type ContactsFragment$key = {
  readonly " $data"?: ContactsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContactsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./ContactsPaginationQuery.graphql')
    }
  },
  "name": "ContactsFragment",
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
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "c2c9090d33801e01f2a129f7674c37a0";

export default node;
