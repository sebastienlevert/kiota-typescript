import {StringKeyAttributeMappingSourceValuePair} from './index';
import {serializeAttributeMappingSource} from './serializeAttributeMappingSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStringKeyAttributeMappingSourceValuePair(writer: SerializationWriter, stringKeyAttributeMappingSourceValuePair: StringKeyAttributeMappingSourceValuePair | undefined = {}) : void {
            writer.writeStringValue("key", stringKeyAttributeMappingSourceValuePair.key);
            writer.writeObjectValueFromMethod("value", stringKeyAttributeMappingSourceValuePair.value as any, serializeAttributeMappingSource);
}
