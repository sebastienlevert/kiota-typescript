import {TimeOffRequest} from './index';
import {serializeScheduleChangeRequest} from './serializeScheduleChangeRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeOffRequest(writer: SerializationWriter, timeOffRequest: TimeOffRequest | undefined = {}) : void {
        serializeScheduleChangeRequest(writer, timeOffRequest)
            writer.writeDateValue("endDateTime", timeOffRequest.endDateTime);
            writer.writeDateValue("startDateTime", timeOffRequest.startDateTime);
            writer.writeStringValue("timeOffReasonId", timeOffRequest.timeOffReasonId);
}
