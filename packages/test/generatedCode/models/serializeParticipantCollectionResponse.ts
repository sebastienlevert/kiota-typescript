import {ParticipantCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeParticipant} from './serializeParticipant';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParticipantCollectionResponse(writer: SerializationWriter, participantCollectionResponse: ParticipantCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, participantCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", participantCollectionResponse.value as any, serializeParticipant);
}
