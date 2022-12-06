import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSecureScore} from './deserializeIntoSecureScore';
import {SecureScoreCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecureScoreCollectionResponse(secureScoreCollectionResponse: SecureScoreCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(secureScoreCollectionResponse),
        "value": n => { secureScoreCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSecureScore) as any ; },
    }
}
