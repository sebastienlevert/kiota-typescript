// import {
//   Parsable,
//   ParseNode,
//   SerializationWriter,
// } from "@microsoft/kiota-abstractions";
// import { assert } from "chai";

// import { JsonParseNode } from "../../src/index";

// describe("ObjectJsonParseNode", () => {
//   it("jsonParseNode:initializes", async () => {
//     interface TestParser {
//       testCollection?: string[] | undefined;
//     }

//     function getFieldDeserializers(
//       testParser: TestParser = {}
//     ): Record<string, (node: ParseNode) => void> {
//       return {
//         testCollection: (n) => {
//           testParser.testCollection =
//             n.getCollectionOfPrimitiveValues<string>();
//         },
//       };
//     }

//     // function serialize(writer: SerializationWriter): void {
//     //   if (!writer) throw new Error("writer cannot be undefined");
//     //   writer.writeCollectionOfPrimitiveValues<string>(
//     //     "testCollection",
//     //     this.testCollection
//     //   );
//     // }

//     const result = new JsonParseNode(null);
//     assert.isDefined(result);

//     const stringValueResult = new JsonParseNode({
//       testCollection: ["2", "3"],
//     }).getObject(getFieldDeserializers) as TestParser;

//     console.log("stringValueResult");
//     console.log(stringValueResult);
//     console.log("stringValueResult");
//     assert.equal(stringValueResult?.testCollection?.length, 2);
//     assert.equal(stringValueResult?.testCollection?.shift(), "2");
//   });
// });
