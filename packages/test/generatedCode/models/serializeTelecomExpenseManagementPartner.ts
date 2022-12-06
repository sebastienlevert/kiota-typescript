import {TelecomExpenseManagementPartner} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTelecomExpenseManagementPartner(writer: SerializationWriter, telecomExpenseManagementPartner: TelecomExpenseManagementPartner | undefined = {}) : void {
        serializeEntity(writer, telecomExpenseManagementPartner)
            writer.writeBooleanValue("appAuthorized", telecomExpenseManagementPartner.appAuthorized);
            writer.writeStringValue("displayName", telecomExpenseManagementPartner.displayName);
            writer.writeBooleanValue("enabled", telecomExpenseManagementPartner.enabled);
            writer.writeDateValue("lastConnectionDateTime", telecomExpenseManagementPartner.lastConnectionDateTime);
            writer.writeStringValue("url", telecomExpenseManagementPartner.url);
}
