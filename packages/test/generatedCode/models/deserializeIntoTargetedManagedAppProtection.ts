import {deserializeIntoManagedAppProtection} from './deserializeIntoManagedAppProtection';
import {deserializeIntoTargetedManagedAppPolicyAssignment} from './deserializeIntoTargetedManagedAppPolicyAssignment';
import {TargetedManagedAppProtection} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetedManagedAppProtection(targetedManagedAppProtection: TargetedManagedAppProtection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppProtection(targetedManagedAppProtection),
        "assignments": n => { targetedManagedAppProtection.assignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTargetedManagedAppPolicyAssignment) as any ; },
        "isAssigned": n => { targetedManagedAppProtection.isAssigned = n.getBooleanValue() as any ; },
    }
}
