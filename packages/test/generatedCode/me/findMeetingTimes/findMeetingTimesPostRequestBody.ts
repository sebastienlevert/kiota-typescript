import {AttendeeBase, LocationConstraint, TimeConstraint} from '../../models/';
import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface FindMeetingTimesPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The attendees property */
    attendees?: AttendeeBase[];
    /** The isOrganizerOptional property */
    isOrganizerOptional?: boolean;
    /** The locationConstraint property */
    locationConstraint?: LocationConstraint;
    /** The maxCandidates property */
    maxCandidates?: number;
    /** The meetingDuration property */
    meetingDuration?: Duration;
    /** The minimumAttendeePercentage property */
    minimumAttendeePercentage?: number;
    /** The returnSuggestionReasons property */
    returnSuggestionReasons?: boolean;
    /** The timeConstraint property */
    timeConstraint?: TimeConstraint;
}
