import {deserializeIntoAppScope} from './deserializeIntoAppScope';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoRequest} from './deserializeIntoRequest';
import {deserializeIntoRequestSchedule} from './deserializeIntoRequestSchedule';
import {deserializeIntoTicketInfo} from './deserializeIntoTicketInfo';
import {deserializeIntoUnifiedRoleDefinition} from './deserializeIntoUnifiedRoleDefinition';
import {deserializeIntoUnifiedRoleEligibilitySchedule} from './deserializeIntoUnifiedRoleEligibilitySchedule';
import {UnifiedRoleEligibilityScheduleRequest} from './index';
import {UnifiedRoleScheduleRequestActions} from './unifiedRoleScheduleRequestActions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleEligibilityScheduleRequest(unifiedRoleEligibilityScheduleRequest: UnifiedRoleEligibilityScheduleRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRequest(unifiedRoleEligibilityScheduleRequest),
        "action": n => { unifiedRoleEligibilityScheduleRequest.action = n.getEnumValue<UnifiedRoleScheduleRequestActions>(UnifiedRoleScheduleRequestActions) as any ; },
        "appScope": n => { unifiedRoleEligibilityScheduleRequest.appScope = n.getObject(deserializeIntoAppScope) as any ; },
        "appScopeId": n => { unifiedRoleEligibilityScheduleRequest.appScopeId = n.getStringValue() as any ; },
        "directoryScope": n => { unifiedRoleEligibilityScheduleRequest.directoryScope = n.getObject(deserializeIntoDirectoryObject) as any ; },
        "directoryScopeId": n => { unifiedRoleEligibilityScheduleRequest.directoryScopeId = n.getStringValue() as any ; },
        "isValidationOnly": n => { unifiedRoleEligibilityScheduleRequest.isValidationOnly = n.getBooleanValue() as any ; },
        "justification": n => { unifiedRoleEligibilityScheduleRequest.justification = n.getStringValue() as any ; },
        "principal": n => { unifiedRoleEligibilityScheduleRequest.principal = n.getObject(deserializeIntoDirectoryObject) as any ; },
        "principalId": n => { unifiedRoleEligibilityScheduleRequest.principalId = n.getStringValue() as any ; },
        "roleDefinition": n => { unifiedRoleEligibilityScheduleRequest.roleDefinition = n.getObject(deserializeIntoUnifiedRoleDefinition) as any ; },
        "roleDefinitionId": n => { unifiedRoleEligibilityScheduleRequest.roleDefinitionId = n.getStringValue() as any ; },
        "scheduleInfo": n => { unifiedRoleEligibilityScheduleRequest.scheduleInfo = n.getObject(deserializeIntoRequestSchedule) as any ; },
        "targetSchedule": n => { unifiedRoleEligibilityScheduleRequest.targetSchedule = n.getObject(deserializeIntoUnifiedRoleEligibilitySchedule) as any ; },
        "targetScheduleId": n => { unifiedRoleEligibilityScheduleRequest.targetScheduleId = n.getStringValue() as any ; },
        "ticketInfo": n => { unifiedRoleEligibilityScheduleRequest.ticketInfo = n.getObject(deserializeIntoTicketInfo) as any ; },
    }
}
