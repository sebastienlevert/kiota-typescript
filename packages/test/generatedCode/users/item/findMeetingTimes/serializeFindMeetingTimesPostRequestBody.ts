import {serializeAttendeeBase} from '../../../models/serializeAttendeeBase';
import {serializeLocationConstraint} from '../../../models/serializeLocationConstraint';
import {serializeTimeConstraint} from '../../../models/serializeTimeConstraint';
import {FindMeetingTimesPostRequestBody} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFindMeetingTimesPostRequestBody(writer: SerializationWriter, findMeetingTimesPostRequestBody: FindMeetingTimesPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("attendees", findMeetingTimesPostRequestBody.attendees as any, serializeAttendeeBase);
            writer.writeBooleanValue("isOrganizerOptional", findMeetingTimesPostRequestBody.isOrganizerOptional);
            writer.writeObjectValueFromMethod("locationConstraint", findMeetingTimesPostRequestBody.locationConstraint as any, serializeLocationConstraint);
            writer.writeNumberValue("maxCandidates", findMeetingTimesPostRequestBody.maxCandidates);
            writer.writeDurationValue("meetingDuration", findMeetingTimesPostRequestBody.meetingDuration);
            writer.writeNumberValue("minimumAttendeePercentage", findMeetingTimesPostRequestBody.minimumAttendeePercentage);
            writer.writeBooleanValue("returnSuggestionReasons", findMeetingTimesPostRequestBody.returnSuggestionReasons);
            writer.writeObjectValueFromMethod("timeConstraint", findMeetingTimesPostRequestBody.timeConstraint as any, serializeTimeConstraint);
}
