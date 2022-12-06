import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCallParticipantInfo} from './deserializeIntoCallParticipantInfo';
import {CallParticipantInfoCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallParticipantInfoCollectionResponse(callParticipantInfoCollectionResponse: CallParticipantInfoCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(callParticipantInfoCollectionResponse),
        "value": n => { callParticipantInfoCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCallParticipantInfo) as any ; },
    }
}
