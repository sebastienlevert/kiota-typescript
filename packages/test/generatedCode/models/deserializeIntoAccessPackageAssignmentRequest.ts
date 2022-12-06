import {AccessPackageRequestState} from './accessPackageRequestState';
import {AccessPackageRequestType} from './accessPackageRequestType';
import {deserializeIntoAccessPackage} from './deserializeIntoAccessPackage';
import {deserializeIntoAccessPackageAssignment} from './deserializeIntoAccessPackageAssignment';
import {deserializeIntoAccessPackageSubject} from './deserializeIntoAccessPackageSubject';
import {deserializeIntoEntitlementManagementSchedule} from './deserializeIntoEntitlementManagementSchedule';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AccessPackageAssignmentRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentRequest(accessPackageAssignmentRequest: AccessPackageAssignmentRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageAssignmentRequest),
        "accessPackage": n => { accessPackageAssignmentRequest.accessPackage = n.getObject(deserializeIntoAccessPackage) as any ; },
        "assignment": n => { accessPackageAssignmentRequest.assignment = n.getObject(deserializeIntoAccessPackageAssignment) as any ; },
        "completedDateTime": n => { accessPackageAssignmentRequest.completedDateTime = n.getDateValue() as any ; },
        "createdDateTime": n => { accessPackageAssignmentRequest.createdDateTime = n.getDateValue() as any ; },
        "requestor": n => { accessPackageAssignmentRequest.requestor = n.getObject(deserializeIntoAccessPackageSubject) as any ; },
        "requestType": n => { accessPackageAssignmentRequest.requestType = n.getEnumValue<AccessPackageRequestType>(AccessPackageRequestType) as any ; },
        "schedule": n => { accessPackageAssignmentRequest.schedule = n.getObject(deserializeIntoEntitlementManagementSchedule) as any ; },
        "state": n => { accessPackageAssignmentRequest.state = n.getEnumValue<AccessPackageRequestState>(AccessPackageRequestState) as any ; },
        "status": n => { accessPackageAssignmentRequest.status = n.getStringValue() as any ; },
    }
}
