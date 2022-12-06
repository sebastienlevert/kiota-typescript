import {deserializeIntoAlternativeSecurityId} from './deserializeIntoAlternativeSecurityId';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AlternativeSecurityIdCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlternativeSecurityIdCollectionResponse(alternativeSecurityIdCollectionResponse: AlternativeSecurityIdCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(alternativeSecurityIdCollectionResponse),
        "value": n => { alternativeSecurityIdCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAlternativeSecurityId) as any ; },
    }
}
