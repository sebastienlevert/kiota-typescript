import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPayloadRequest} from './deserializeIntoPayloadRequest';
import {deserializeIntoPayloadResponse} from './deserializeIntoPayloadResponse';
import {Command} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCommand(command: Command | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(command),
        "appServiceName": n => { command.appServiceName = n.getStringValue() as any ; },
        "error": n => { command.error_escaped = n.getStringValue() as any ; },
        "packageFamilyName": n => { command.packageFamilyName = n.getStringValue() as any ; },
        "payload": n => { command.payload = n.getObject(deserializeIntoPayloadRequest) as any ; },
        "permissionTicket": n => { command.permissionTicket = n.getStringValue() as any ; },
        "postBackUri": n => { command.postBackUri = n.getStringValue() as any ; },
        "responsepayload": n => { command.responsepayload = n.getObject(deserializeIntoPayloadResponse) as any ; },
        "status": n => { command.status = n.getStringValue() as any ; },
        "type": n => { command.type = n.getStringValue() as any ; },
    }
}
