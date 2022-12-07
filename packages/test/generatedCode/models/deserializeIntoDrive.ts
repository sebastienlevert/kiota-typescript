import {deserializeIntoBaseItem} from './deserializeIntoBaseItem';
import {deserializeIntoDriveItem} from './deserializeIntoDriveItem';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoItemActivityOLD} from './deserializeIntoItemActivityOLD';
import {deserializeIntoList} from './deserializeIntoList';
import {deserializeIntoQuota} from './deserializeIntoQuota';
import {deserializeIntoSharepointIds} from './deserializeIntoSharepointIds';
import {deserializeIntoSystemFacet} from './deserializeIntoSystemFacet';
import {Drive} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDrive(drive: Drive | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItem(drive),
        "activities": n => { drive.activities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemActivityOLD) as any ; },
        "bundles": n => { drive.bundles = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDriveItem) as any ; },
        "driveType": n => { drive.driveType = n.getStringValue() as any ; },
        "following": n => { drive.following = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDriveItem) as any ; },
        "items": n => { drive.items = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDriveItem) as any ; },
        "list": n => { drive.list = n.getObject(deserializeIntoList) as any ; },
        "owner": n => { drive.owner = n.getObject(deserializeIntoIdentitySet) as any ; },
        "quota": n => { drive.quota = n.getObject(deserializeIntoQuota) as any ; },
        "root": n => { drive.root = n.getObject(deserializeIntoDriveItem) as any ; },
        "sharePointIds": n => { drive.sharePointIds = n.getObject(deserializeIntoSharepointIds) as any ; },
        "special": n => { drive.special = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDriveItem) as any ; },
        "system": n => { drive.system = n.getObject(deserializeIntoSystemFacet) as any ; },
    }
}
