import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSecureScoreControlProfile} from './deserializeIntoSecureScoreControlProfile';
import {SecureScoreControlProfileCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecureScoreControlProfileCollectionResponse(secureScoreControlProfileCollectionResponse: SecureScoreControlProfileCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(secureScoreControlProfileCollectionResponse),
        "value": n => { secureScoreControlProfileCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSecureScoreControlProfile) as any ; },
    }
}
