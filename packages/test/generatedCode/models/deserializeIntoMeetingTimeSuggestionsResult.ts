import {deserializeIntoMeetingTimeSuggestion} from './deserializeIntoMeetingTimeSuggestion';
import {MeetingTimeSuggestionsResult} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingTimeSuggestionsResult(meetingTimeSuggestionsResult: MeetingTimeSuggestionsResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "emptySuggestionsReason": n => { meetingTimeSuggestionsResult.emptySuggestionsReason = n.getStringValue() as any ; },
        "meetingTimeSuggestions": n => { meetingTimeSuggestionsResult.meetingTimeSuggestions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMeetingTimeSuggestion) as any ; },
        "@odata.type": n => { meetingTimeSuggestionsResult.odataType = n.getStringValue() as any ; },
    }
}
