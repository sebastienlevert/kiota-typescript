import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSecureScoreControlStateUpdate} from './deserializeIntoSecureScoreControlStateUpdate';
import {SecureScoreControlStateUpdateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecureScoreControlStateUpdateCollectionResponse(secureScoreControlStateUpdateCollectionResponse: SecureScoreControlStateUpdateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(secureScoreControlStateUpdateCollectionResponse),
        "value": n => { secureScoreControlStateUpdateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSecureScoreControlStateUpdate) as any ; },
    }
}
