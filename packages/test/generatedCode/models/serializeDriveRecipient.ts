import {DriveRecipient} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDriveRecipient(writer: SerializationWriter, driveRecipient: DriveRecipient | undefined = {}) : void {
            writer.writeStringValue("alias", driveRecipient.alias);
            writer.writeStringValue("email", driveRecipient.email);
            writer.writeStringValue("objectId", driveRecipient.objectId);
            writer.writeStringValue("@odata.type", driveRecipient.odataType);
}
