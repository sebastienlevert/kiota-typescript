import {PayloadResponse} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePayloadResponse(writer: SerializationWriter, payloadResponse: PayloadResponse | undefined = {}) : void {
        serializeEntity(writer, payloadResponse)
}
