import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoUnifiedRoleAssignment} from './deserializeIntoUnifiedRoleAssignment';
import {deserializeIntoUnifiedRoleAssignmentSchedule} from './deserializeIntoUnifiedRoleAssignmentSchedule';
import {deserializeIntoUnifiedRoleAssignmentScheduleInstance} from './deserializeIntoUnifiedRoleAssignmentScheduleInstance';
import {deserializeIntoUnifiedRoleAssignmentScheduleRequest} from './deserializeIntoUnifiedRoleAssignmentScheduleRequest';
import {deserializeIntoUnifiedRoleDefinition} from './deserializeIntoUnifiedRoleDefinition';
import {deserializeIntoUnifiedRoleEligibilitySchedule} from './deserializeIntoUnifiedRoleEligibilitySchedule';
import {deserializeIntoUnifiedRoleEligibilityScheduleInstance} from './deserializeIntoUnifiedRoleEligibilityScheduleInstance';
import {deserializeIntoUnifiedRoleEligibilityScheduleRequest} from './deserializeIntoUnifiedRoleEligibilityScheduleRequest';
import {RbacApplication} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRbacApplication(rbacApplication: RbacApplication | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(rbacApplication),
        "roleAssignments": n => { rbacApplication.roleAssignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleAssignment) as any ; },
        "roleAssignmentScheduleInstances": n => { rbacApplication.roleAssignmentScheduleInstances = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleAssignmentScheduleInstance) as any ; },
        "roleAssignmentScheduleRequests": n => { rbacApplication.roleAssignmentScheduleRequests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleAssignmentScheduleRequest) as any ; },
        "roleAssignmentSchedules": n => { rbacApplication.roleAssignmentSchedules = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleAssignmentSchedule) as any ; },
        "roleDefinitions": n => { rbacApplication.roleDefinitions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleDefinition) as any ; },
        "roleEligibilityScheduleInstances": n => { rbacApplication.roleEligibilityScheduleInstances = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleEligibilityScheduleInstance) as any ; },
        "roleEligibilityScheduleRequests": n => { rbacApplication.roleEligibilityScheduleRequests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleEligibilityScheduleRequest) as any ; },
        "roleEligibilitySchedules": n => { rbacApplication.roleEligibilitySchedules = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleEligibilitySchedule) as any ; },
    }
}
