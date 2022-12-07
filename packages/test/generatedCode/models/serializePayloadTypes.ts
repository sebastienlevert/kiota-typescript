import {PayloadTypes} from './index';
import {serializeVisualProperties} from './serializeVisualProperties';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePayloadTypes(writer: SerializationWriter, payloadTypes: PayloadTypes | undefined = {}) : void {
            writer.writeStringValue("rawContent", payloadTypes.rawContent);
            writer.writeObjectValueFromMethod("visualContent", payloadTypes.visualContent as any, serializeVisualProperties);
}
