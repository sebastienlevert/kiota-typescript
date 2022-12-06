import {MeetingParticipantInfoCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMeetingParticipantInfo} from './serializeMeetingParticipantInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingParticipantInfoCollectionResponse(writer: SerializationWriter, meetingParticipantInfoCollectionResponse: MeetingParticipantInfoCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, meetingParticipantInfoCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", meetingParticipantInfoCollectionResponse.value as any, serializeMeetingParticipantInfo);
}
