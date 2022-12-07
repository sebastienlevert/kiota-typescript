import {ScheduleChangeRequest} from './index';
import {ScheduleChangeRequestActor} from './scheduleChangeRequestActor';
import {ScheduleChangeState} from './scheduleChangeState';
import {serializeChangeTrackedEntity} from './serializeChangeTrackedEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeScheduleChangeRequest(writer: SerializationWriter, scheduleChangeRequest: ScheduleChangeRequest | undefined = {}) : void {
        serializeChangeTrackedEntity(writer, scheduleChangeRequest)
            writer.writeEnumValue<ScheduleChangeRequestActor>("assignedTo", scheduleChangeRequest.assignedTo);
            writer.writeDateValue("managerActionDateTime", scheduleChangeRequest.managerActionDateTime);
            writer.writeStringValue("managerActionMessage", scheduleChangeRequest.managerActionMessage);
            writer.writeStringValue("managerUserId", scheduleChangeRequest.managerUserId);
            writer.writeDateValue("senderDateTime", scheduleChangeRequest.senderDateTime);
            writer.writeStringValue("senderMessage", scheduleChangeRequest.senderMessage);
            writer.writeStringValue("senderUserId", scheduleChangeRequest.senderUserId);
            writer.writeEnumValue<ScheduleChangeState>("state", scheduleChangeRequest.state);
}
