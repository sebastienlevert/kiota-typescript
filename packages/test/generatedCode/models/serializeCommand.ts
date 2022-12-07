import {Command} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePayloadRequest} from './serializePayloadRequest';
import {serializePayloadResponse} from './serializePayloadResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCommand(writer: SerializationWriter, command: Command | undefined = {}) : void {
        serializeEntity(writer, command)
            writer.writeStringValue("appServiceName", command.appServiceName);
            writer.writeStringValue("error", command.error_escaped);
            writer.writeStringValue("packageFamilyName", command.packageFamilyName);
            writer.writeObjectValueFromMethod("payload", command.payload as any, serializePayloadRequest);
            writer.writeStringValue("permissionTicket", command.permissionTicket);
            writer.writeStringValue("postBackUri", command.postBackUri);
            writer.writeObjectValueFromMethod("responsepayload", command.responsepayload as any, serializePayloadResponse);
            writer.writeStringValue("status", command.status);
            writer.writeStringValue("type", command.type);
}
