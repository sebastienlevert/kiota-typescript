import {RbacApplication} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeUnifiedRoleAssignment} from './serializeUnifiedRoleAssignment';
import {serializeUnifiedRoleAssignmentSchedule} from './serializeUnifiedRoleAssignmentSchedule';
import {serializeUnifiedRoleAssignmentScheduleInstance} from './serializeUnifiedRoleAssignmentScheduleInstance';
import {serializeUnifiedRoleAssignmentScheduleRequest} from './serializeUnifiedRoleAssignmentScheduleRequest';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {serializeUnifiedRoleEligibilitySchedule} from './serializeUnifiedRoleEligibilitySchedule';
import {serializeUnifiedRoleEligibilityScheduleInstance} from './serializeUnifiedRoleEligibilityScheduleInstance';
import {serializeUnifiedRoleEligibilityScheduleRequest} from './serializeUnifiedRoleEligibilityScheduleRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRbacApplication(writer: SerializationWriter, rbacApplication: RbacApplication | undefined = {}) : void {
        serializeEntity(writer, rbacApplication)
            writer.writeCollectionOfObjectValuesFromMethod("roleAssignments", rbacApplication.roleAssignments as any, serializeUnifiedRoleAssignment);
            writer.writeCollectionOfObjectValuesFromMethod("roleAssignmentScheduleInstances", rbacApplication.roleAssignmentScheduleInstances as any, serializeUnifiedRoleAssignmentScheduleInstance);
            writer.writeCollectionOfObjectValuesFromMethod("roleAssignmentScheduleRequests", rbacApplication.roleAssignmentScheduleRequests as any, serializeUnifiedRoleAssignmentScheduleRequest);
            writer.writeCollectionOfObjectValuesFromMethod("roleAssignmentSchedules", rbacApplication.roleAssignmentSchedules as any, serializeUnifiedRoleAssignmentSchedule);
            writer.writeCollectionOfObjectValuesFromMethod("roleDefinitions", rbacApplication.roleDefinitions as any, serializeUnifiedRoleDefinition);
            writer.writeCollectionOfObjectValuesFromMethod("roleEligibilityScheduleInstances", rbacApplication.roleEligibilityScheduleInstances as any, serializeUnifiedRoleEligibilityScheduleInstance);
            writer.writeCollectionOfObjectValuesFromMethod("roleEligibilityScheduleRequests", rbacApplication.roleEligibilityScheduleRequests as any, serializeUnifiedRoleEligibilityScheduleRequest);
            writer.writeCollectionOfObjectValuesFromMethod("roleEligibilitySchedules", rbacApplication.roleEligibilitySchedules as any, serializeUnifiedRoleEligibilitySchedule);
}
