import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoScoredEmailAddress} from './deserializeIntoScoredEmailAddress';
import {ScoredEmailAddressCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScoredEmailAddressCollectionResponse(scoredEmailAddressCollectionResponse: ScoredEmailAddressCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(scoredEmailAddressCollectionResponse),
        "value": n => { scoredEmailAddressCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoScoredEmailAddress) as any ; },
    }
}
