import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPerson} from './deserializeIntoPerson';
import {PersonCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonCollectionResponse(personCollectionResponse: PersonCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(personCollectionResponse),
        "value": n => { personCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPerson) as any ; },
    }
}
