import {Endpoint} from './index';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEndpoint(writer: SerializationWriter, endpoint: Endpoint | undefined = {}) : void {
        serializeDirectoryObject(writer, endpoint)
            writer.writeStringValue("capability", endpoint.capability);
            writer.writeStringValue("providerId", endpoint.providerId);
            writer.writeStringValue("providerName", endpoint.providerName);
            writer.writeStringValue("providerResourceId", endpoint.providerResourceId);
            writer.writeStringValue("uri", endpoint.uri);
}
