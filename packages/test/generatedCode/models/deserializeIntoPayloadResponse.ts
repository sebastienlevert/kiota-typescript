import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PayloadResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPayloadResponse(payloadResponse: PayloadResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(payloadResponse),
    }
}
