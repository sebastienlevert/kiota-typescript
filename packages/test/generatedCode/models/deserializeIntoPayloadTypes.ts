import {deserializeIntoVisualProperties} from './deserializeIntoVisualProperties';
import {PayloadTypes} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPayloadTypes(payloadTypes: PayloadTypes | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "rawContent": n => { payloadTypes.rawContent = n.getStringValue() as any ; },
        "visualContent": n => { payloadTypes.visualContent = n.getObject(deserializeIntoVisualProperties) as any ; },
    }
}
