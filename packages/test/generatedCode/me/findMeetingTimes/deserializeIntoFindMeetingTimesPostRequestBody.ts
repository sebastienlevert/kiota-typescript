import {deserializeIntoAttendeeBase} from '../../models/deserializeIntoAttendeeBase';
import {deserializeIntoLocationConstraint} from '../../models/deserializeIntoLocationConstraint';
import {deserializeIntoTimeConstraint} from '../../models/deserializeIntoTimeConstraint';
import {FindMeetingTimesPostRequestBody} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFindMeetingTimesPostRequestBody(findMeetingTimesPostRequestBody: FindMeetingTimesPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attendees": n => { findMeetingTimesPostRequestBody.attendees = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttendeeBase) as any ; },
        "isOrganizerOptional": n => { findMeetingTimesPostRequestBody.isOrganizerOptional = n.getBooleanValue() as any ; },
        "locationConstraint": n => { findMeetingTimesPostRequestBody.locationConstraint = n.getObject(deserializeIntoLocationConstraint) as any ; },
        "maxCandidates": n => { findMeetingTimesPostRequestBody.maxCandidates = n.getNumberValue() as any ; },
        "meetingDuration": n => { findMeetingTimesPostRequestBody.meetingDuration = n.getDurationValue() as any ; },
        "minimumAttendeePercentage": n => { findMeetingTimesPostRequestBody.minimumAttendeePercentage = n.getNumberValue() as any ; },
        "returnSuggestionReasons": n => { findMeetingTimesPostRequestBody.returnSuggestionReasons = n.getBooleanValue() as any ; },
        "timeConstraint": n => { findMeetingTimesPostRequestBody.timeConstraint = n.getObject(deserializeIntoTimeConstraint) as any ; },
    }
}
