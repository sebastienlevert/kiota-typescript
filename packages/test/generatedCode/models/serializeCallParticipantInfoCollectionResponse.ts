import {CallParticipantInfoCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCallParticipantInfo} from './serializeCallParticipantInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallParticipantInfoCollectionResponse(writer: SerializationWriter, callParticipantInfoCollectionResponse: CallParticipantInfoCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, callParticipantInfoCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", callParticipantInfoCollectionResponse.value as any, serializeCallParticipantInfo);
}
