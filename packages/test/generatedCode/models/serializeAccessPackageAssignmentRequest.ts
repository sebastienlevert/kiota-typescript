import {AccessPackageRequestState} from './accessPackageRequestState';
import {AccessPackageRequestType} from './accessPackageRequestType';
import {AccessPackageAssignmentRequest} from './index';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeAccessPackageAssignment} from './serializeAccessPackageAssignment';
import {serializeAccessPackageSubject} from './serializeAccessPackageSubject';
import {serializeEntitlementManagementSchedule} from './serializeEntitlementManagementSchedule';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentRequest(writer: SerializationWriter, accessPackageAssignmentRequest: AccessPackageAssignmentRequest | undefined = {}) : void {
        serializeEntity(writer, accessPackageAssignmentRequest)
            writer.writeObjectValueFromMethod("accessPackage", accessPackageAssignmentRequest.accessPackage as any, serializeAccessPackage);
            writer.writeObjectValueFromMethod("assignment", accessPackageAssignmentRequest.assignment as any, serializeAccessPackageAssignment);
            writer.writeDateValue("completedDateTime", accessPackageAssignmentRequest.completedDateTime);
            writer.writeDateValue("createdDateTime", accessPackageAssignmentRequest.createdDateTime);
            writer.writeObjectValueFromMethod("requestor", accessPackageAssignmentRequest.requestor as any, serializeAccessPackageSubject);
            writer.writeEnumValue<AccessPackageRequestType>("requestType", accessPackageAssignmentRequest.requestType);
            writer.writeObjectValueFromMethod("schedule", accessPackageAssignmentRequest.schedule as any, serializeEntitlementManagementSchedule);
            writer.writeEnumValue<AccessPackageRequestState>("state", accessPackageAssignmentRequest.state);
            writer.writeStringValue("status", accessPackageAssignmentRequest.status);
}
