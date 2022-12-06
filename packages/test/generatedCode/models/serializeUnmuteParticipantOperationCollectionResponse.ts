import {UnmuteParticipantOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnmuteParticipantOperation} from './serializeUnmuteParticipantOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnmuteParticipantOperationCollectionResponse(writer: SerializationWriter, unmuteParticipantOperationCollectionResponse: UnmuteParticipantOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unmuteParticipantOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unmuteParticipantOperationCollectionResponse.value as any, serializeUnmuteParticipantOperation);
}
