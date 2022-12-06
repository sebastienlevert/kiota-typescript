import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {ScheduleChangeRequest} from './index';
import {ScheduleChangeRequestActor} from './scheduleChangeRequestActor';
import {ScheduleChangeState} from './scheduleChangeState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScheduleChangeRequest(scheduleChangeRequest: ScheduleChangeRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(scheduleChangeRequest),
        "assignedTo": n => { scheduleChangeRequest.assignedTo = n.getEnumValue<ScheduleChangeRequestActor>(ScheduleChangeRequestActor) as any ; },
        "managerActionDateTime": n => { scheduleChangeRequest.managerActionDateTime = n.getDateValue() as any ; },
        "managerActionMessage": n => { scheduleChangeRequest.managerActionMessage = n.getStringValue() as any ; },
        "managerUserId": n => { scheduleChangeRequest.managerUserId = n.getStringValue() as any ; },
        "senderDateTime": n => { scheduleChangeRequest.senderDateTime = n.getDateValue() as any ; },
        "senderMessage": n => { scheduleChangeRequest.senderMessage = n.getStringValue() as any ; },
        "senderUserId": n => { scheduleChangeRequest.senderUserId = n.getStringValue() as any ; },
        "state": n => { scheduleChangeRequest.state = n.getEnumValue<ScheduleChangeState>(ScheduleChangeState) as any ; },
    }
}
