import {MeetingTimeSuggestionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMeetingTimeSuggestion} from './serializeMeetingTimeSuggestion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingTimeSuggestionCollectionResponse(writer: SerializationWriter, meetingTimeSuggestionCollectionResponse: MeetingTimeSuggestionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, meetingTimeSuggestionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", meetingTimeSuggestionCollectionResponse.value as any, serializeMeetingTimeSuggestion);
}
