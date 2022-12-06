import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRemoteAssistancePartner} from './deserializeIntoRemoteAssistancePartner';
import {RemoteAssistancePartnerCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoteAssistancePartnerCollectionResponse(remoteAssistancePartnerCollectionResponse: RemoteAssistancePartnerCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(remoteAssistancePartnerCollectionResponse),
        "value": n => { remoteAssistancePartnerCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRemoteAssistancePartner) as any ; },
    }
}
