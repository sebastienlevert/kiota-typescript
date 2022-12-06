import {deserializeIntoAppScope} from './deserializeIntoAppScope';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoRequest} from './deserializeIntoRequest';
import {deserializeIntoRequestSchedule} from './deserializeIntoRequestSchedule';
import {deserializeIntoTicketInfo} from './deserializeIntoTicketInfo';
import {deserializeIntoUnifiedRoleAssignmentSchedule} from './deserializeIntoUnifiedRoleAssignmentSchedule';
import {deserializeIntoUnifiedRoleDefinition} from './deserializeIntoUnifiedRoleDefinition';
import {deserializeIntoUnifiedRoleEligibilitySchedule} from './deserializeIntoUnifiedRoleEligibilitySchedule';
import {UnifiedRoleAssignmentScheduleRequest} from './index';
import {UnifiedRoleScheduleRequestActions} from './unifiedRoleScheduleRequestActions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignmentScheduleRequest(unifiedRoleAssignmentScheduleRequest: UnifiedRoleAssignmentScheduleRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRequest(unifiedRoleAssignmentScheduleRequest),
        "action": n => { unifiedRoleAssignmentScheduleRequest.action = n.getEnumValue<UnifiedRoleScheduleRequestActions>(UnifiedRoleScheduleRequestActions) as any ; },
        "activatedUsing": n => { unifiedRoleAssignmentScheduleRequest.activatedUsing = n.getObject(deserializeIntoUnifiedRoleEligibilitySchedule) as any ; },
        "appScope": n => { unifiedRoleAssignmentScheduleRequest.appScope = n.getObject(deserializeIntoAppScope) as any ; },
        "appScopeId": n => { unifiedRoleAssignmentScheduleRequest.appScopeId = n.getStringValue() as any ; },
        "directoryScope": n => { unifiedRoleAssignmentScheduleRequest.directoryScope = n.getObject(deserializeIntoDirectoryObject) as any ; },
        "directoryScopeId": n => { unifiedRoleAssignmentScheduleRequest.directoryScopeId = n.getStringValue() as any ; },
        "isValidationOnly": n => { unifiedRoleAssignmentScheduleRequest.isValidationOnly = n.getBooleanValue() as any ; },
        "justification": n => { unifiedRoleAssignmentScheduleRequest.justification = n.getStringValue() as any ; },
        "principal": n => { unifiedRoleAssignmentScheduleRequest.principal = n.getObject(deserializeIntoDirectoryObject) as any ; },
        "principalId": n => { unifiedRoleAssignmentScheduleRequest.principalId = n.getStringValue() as any ; },
        "roleDefinition": n => { unifiedRoleAssignmentScheduleRequest.roleDefinition = n.getObject(deserializeIntoUnifiedRoleDefinition) as any ; },
        "roleDefinitionId": n => { unifiedRoleAssignmentScheduleRequest.roleDefinitionId = n.getStringValue() as any ; },
        "scheduleInfo": n => { unifiedRoleAssignmentScheduleRequest.scheduleInfo = n.getObject(deserializeIntoRequestSchedule) as any ; },
        "targetSchedule": n => { unifiedRoleAssignmentScheduleRequest.targetSchedule = n.getObject(deserializeIntoUnifiedRoleAssignmentSchedule) as any ; },
        "targetScheduleId": n => { unifiedRoleAssignmentScheduleRequest.targetScheduleId = n.getStringValue() as any ; },
        "ticketInfo": n => { unifiedRoleAssignmentScheduleRequest.ticketInfo = n.getObject(deserializeIntoTicketInfo) as any ; },
    }
}
