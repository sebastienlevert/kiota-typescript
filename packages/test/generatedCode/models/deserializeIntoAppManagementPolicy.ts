import {deserializeIntoAppManagementConfiguration} from './deserializeIntoAppManagementConfiguration';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {AppManagementPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppManagementPolicy(appManagementPolicy: AppManagementPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPolicyBase(appManagementPolicy),
        "appliesTo": n => { appManagementPolicy.appliesTo = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "isEnabled": n => { appManagementPolicy.isEnabled = n.getBooleanValue() as any ; },
        "restrictions": n => { appManagementPolicy.restrictions = n.getObject(deserializeIntoAppManagementConfiguration) as any ; },
    }
}
