import {MuteParticipantOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMuteParticipantOperation} from './serializeMuteParticipantOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMuteParticipantOperationCollectionResponse(writer: SerializationWriter, muteParticipantOperationCollectionResponse: MuteParticipantOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, muteParticipantOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", muteParticipantOperationCollectionResponse.value as any, serializeMuteParticipantOperation);
}
