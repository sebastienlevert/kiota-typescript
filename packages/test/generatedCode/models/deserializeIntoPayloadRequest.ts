import {PayloadRequest} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPayloadRequest(payloadRequest: PayloadRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
