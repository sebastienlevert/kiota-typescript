import {AccessPackageAssignmentState} from './accessPackageAssignmentState';
import {deserializeIntoAccessPackage} from './deserializeIntoAccessPackage';
import {deserializeIntoAccessPackageAssignmentPolicy} from './deserializeIntoAccessPackageAssignmentPolicy';
import {deserializeIntoAccessPackageSubject} from './deserializeIntoAccessPackageSubject';
import {deserializeIntoEntitlementManagementSchedule} from './deserializeIntoEntitlementManagementSchedule';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AccessPackageAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignment(accessPackageAssignment: AccessPackageAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageAssignment),
        "accessPackage": n => { accessPackageAssignment.accessPackage = n.getObject(deserializeIntoAccessPackage) as any ; },
        "assignmentPolicy": n => { accessPackageAssignment.assignmentPolicy = n.getObject(deserializeIntoAccessPackageAssignmentPolicy) as any ; },
        "expiredDateTime": n => { accessPackageAssignment.expiredDateTime = n.getDateValue() as any ; },
        "schedule": n => { accessPackageAssignment.schedule = n.getObject(deserializeIntoEntitlementManagementSchedule) as any ; },
        "state": n => { accessPackageAssignment.state = n.getEnumValue<AccessPackageAssignmentState>(AccessPackageAssignmentState) as any ; },
        "status": n => { accessPackageAssignment.status = n.getStringValue() as any ; },
        "target": n => { accessPackageAssignment.target = n.getObject(deserializeIntoAccessPackageSubject) as any ; },
    }
}
