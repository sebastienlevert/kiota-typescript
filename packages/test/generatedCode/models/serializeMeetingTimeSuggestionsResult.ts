import {MeetingTimeSuggestionsResult} from './index';
import {serializeMeetingTimeSuggestion} from './serializeMeetingTimeSuggestion';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingTimeSuggestionsResult(writer: SerializationWriter, meetingTimeSuggestionsResult: MeetingTimeSuggestionsResult | undefined = {}) : void {
            writer.writeStringValue("emptySuggestionsReason", meetingTimeSuggestionsResult.emptySuggestionsReason);
            writer.writeCollectionOfObjectValuesFromMethod("meetingTimeSuggestions", meetingTimeSuggestionsResult.meetingTimeSuggestions as any, serializeMeetingTimeSuggestion);
            writer.writeStringValue("@odata.type", meetingTimeSuggestionsResult.odataType);
}
