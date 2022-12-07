import {LinkedResource} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLinkedResource(writer: SerializationWriter, linkedResource: LinkedResource | undefined = {}) : void {
        serializeEntity(writer, linkedResource)
            writer.writeStringValue("applicationName", linkedResource.applicationName);
            writer.writeStringValue("displayName", linkedResource.displayName);
            writer.writeStringValue("externalId", linkedResource.externalId);
            writer.writeStringValue("webUrl", linkedResource.webUrl);
}
