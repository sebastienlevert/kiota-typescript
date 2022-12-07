import {SharedAppleDeviceUser} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedAppleDeviceUser(writer: SerializationWriter, sharedAppleDeviceUser: SharedAppleDeviceUser | undefined = {}) : void {
            writer.writeNumberValue("dataQuota", sharedAppleDeviceUser.dataQuota);
            writer.writeBooleanValue("dataToSync", sharedAppleDeviceUser.dataToSync);
            writer.writeNumberValue("dataUsed", sharedAppleDeviceUser.dataUsed);
            writer.writeStringValue("userPrincipalName", sharedAppleDeviceUser.userPrincipalName);
}
