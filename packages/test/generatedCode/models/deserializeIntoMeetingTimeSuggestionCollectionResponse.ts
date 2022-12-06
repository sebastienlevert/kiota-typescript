import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMeetingTimeSuggestion} from './deserializeIntoMeetingTimeSuggestion';
import {MeetingTimeSuggestionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingTimeSuggestionCollectionResponse(meetingTimeSuggestionCollectionResponse: MeetingTimeSuggestionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(meetingTimeSuggestionCollectionResponse),
        "value": n => { meetingTimeSuggestionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMeetingTimeSuggestion) as any ; },
    }
}
