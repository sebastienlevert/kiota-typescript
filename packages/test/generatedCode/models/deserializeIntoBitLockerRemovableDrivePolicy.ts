import {BitLockerEncryptionMethod} from './bitLockerEncryptionMethod';
import {BitLockerRemovableDrivePolicy} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBitLockerRemovableDrivePolicy(bitLockerRemovableDrivePolicy: BitLockerRemovableDrivePolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "blockCrossOrganizationWriteAccess": n => { bitLockerRemovableDrivePolicy.blockCrossOrganizationWriteAccess = n.getBooleanValue() as any ; },
        "encryptionMethod": n => { bitLockerRemovableDrivePolicy.encryptionMethod = n.getEnumValue<BitLockerEncryptionMethod>(BitLockerEncryptionMethod) as any ; },
        "@odata.type": n => { bitLockerRemovableDrivePolicy.odataType = n.getStringValue() as any ; },
        "requireEncryptionForWriteAccess": n => { bitLockerRemovableDrivePolicy.requireEncryptionForWriteAccess = n.getBooleanValue() as any ; },
    }
}
