import {SharedAppleDeviceUser} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedAppleDeviceUser(sharedAppleDeviceUser: SharedAppleDeviceUser | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "dataQuota": n => { sharedAppleDeviceUser.dataQuota = n.getNumberValue() as any ; },
        "dataToSync": n => { sharedAppleDeviceUser.dataToSync = n.getBooleanValue() as any ; },
        "dataUsed": n => { sharedAppleDeviceUser.dataUsed = n.getNumberValue() as any ; },
        "userPrincipalName": n => { sharedAppleDeviceUser.userPrincipalName = n.getStringValue() as any ; },
    }
}
