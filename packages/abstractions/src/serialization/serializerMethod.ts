import { ParseNode } from "./parseNode";
import { SerializationWriter } from "./serializationWriter";

export type SerializerMethod = (
  writer: SerializationWriter,
  value: any
) => void;

export type DeserializeMethod<T> = (
  value?: T | undefined
) => Record<string, (node: ParseNode) => void>;
