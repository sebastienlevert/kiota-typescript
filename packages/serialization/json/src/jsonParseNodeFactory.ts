import { ParseNode, ParseNodeFactory } from "@microsoft/kiota-abstractions";

import { JsonParseNode } from "./jsonParseNode";

export class JsonParseNodeFactory implements ParseNodeFactory {
  public getValidContentType(): string {
    return "application/json";
  }
  public getRootParseNode(
    contentType: string,
    content: ArrayBuffer
  ): ParseNode {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    } else if (this.getValidContentType() !== contentType) {
      throw new Error(`expected a ${this.getValidContentType()} content type`);
    }
    if (!content) {
      throw new Error("content cannot be undefined of empty");
    }
  
    const formData = new Uint8Array(content);
    const json = String.fromCharCode.apply(null, formData);
    const contentAsJson = JSON.parse(json);
     
    return new JsonParseNode(contentAsJson);
  }
}
