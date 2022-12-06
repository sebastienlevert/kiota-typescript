import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRiskyUser} from './deserializeIntoRiskyUser';
import {RiskyUserCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskyUserCollectionResponse(riskyUserCollectionResponse: RiskyUserCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(riskyUserCollectionResponse),
        "value": n => { riskyUserCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRiskyUser) as any ; },
    }
}
