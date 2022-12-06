import {DriveRecipient} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveRecipient(driveRecipient: DriveRecipient | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "alias": n => { driveRecipient.alias = n.getStringValue() as any ; },
        "email": n => { driveRecipient.email = n.getStringValue() as any ; },
        "objectId": n => { driveRecipient.objectId = n.getStringValue() as any ; },
        "@odata.type": n => { driveRecipient.odataType = n.getStringValue() as any ; },
    }
}
