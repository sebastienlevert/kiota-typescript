import {AccessPackageAssignmentState} from './accessPackageAssignmentState';
import {AccessPackageAssignment} from './index';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeAccessPackageAssignmentPolicy} from './serializeAccessPackageAssignmentPolicy';
import {serializeAccessPackageSubject} from './serializeAccessPackageSubject';
import {serializeEntitlementManagementSchedule} from './serializeEntitlementManagementSchedule';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignment(writer: SerializationWriter, accessPackageAssignment: AccessPackageAssignment | undefined = {}) : void {
        serializeEntity(writer, accessPackageAssignment)
            writer.writeObjectValueFromMethod("accessPackage", accessPackageAssignment.accessPackage as any, serializeAccessPackage);
            writer.writeObjectValueFromMethod("assignmentPolicy", accessPackageAssignment.assignmentPolicy as any, serializeAccessPackageAssignmentPolicy);
            writer.writeDateValue("expiredDateTime", accessPackageAssignment.expiredDateTime);
            writer.writeObjectValueFromMethod("schedule", accessPackageAssignment.schedule as any, serializeEntitlementManagementSchedule);
            writer.writeEnumValue<AccessPackageAssignmentState>("state", accessPackageAssignment.state);
            writer.writeStringValue("status", accessPackageAssignment.status);
            writer.writeObjectValueFromMethod("target", accessPackageAssignment.target as any, serializeAccessPackageSubject);
}
