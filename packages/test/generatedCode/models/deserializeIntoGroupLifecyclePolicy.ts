import {deserializeIntoEntity} from './deserializeIntoEntity';
import {GroupLifecyclePolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupLifecyclePolicy(groupLifecyclePolicy: GroupLifecyclePolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(groupLifecyclePolicy),
        "alternateNotificationEmails": n => { groupLifecyclePolicy.alternateNotificationEmails = n.getStringValue() as any ; },
        "groupLifetimeInDays": n => { groupLifecyclePolicy.groupLifetimeInDays = n.getNumberValue() as any ; },
        "managedGroupTypes": n => { groupLifecyclePolicy.managedGroupTypes = n.getStringValue() as any ; },
    }
}
