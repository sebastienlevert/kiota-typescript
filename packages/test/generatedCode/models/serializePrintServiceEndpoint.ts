import {PrintServiceEndpoint} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintServiceEndpoint(writer: SerializationWriter, printServiceEndpoint: PrintServiceEndpoint | undefined = {}) : void {
        serializeEntity(writer, printServiceEndpoint)
            writer.writeStringValue("displayName", printServiceEndpoint.displayName);
            writer.writeStringValue("uri", printServiceEndpoint.uri);
}
