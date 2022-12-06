import {TargetedManagedAppProtection} from './index';
import {serializeManagedAppProtection} from './serializeManagedAppProtection';
import {serializeTargetedManagedAppPolicyAssignment} from './serializeTargetedManagedAppPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetedManagedAppProtection(writer: SerializationWriter, targetedManagedAppProtection: TargetedManagedAppProtection | undefined = {}) : void {
        serializeManagedAppProtection(writer, targetedManagedAppProtection)
            writer.writeCollectionOfObjectValuesFromMethod("assignments", targetedManagedAppProtection.assignments as any, serializeTargetedManagedAppPolicyAssignment);
            writer.writeBooleanValue("isAssigned", targetedManagedAppProtection.isAssigned);
}
