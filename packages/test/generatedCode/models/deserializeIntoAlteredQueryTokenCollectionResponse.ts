import {deserializeIntoAlteredQueryToken} from './deserializeIntoAlteredQueryToken';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AlteredQueryTokenCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlteredQueryTokenCollectionResponse(alteredQueryTokenCollectionResponse: AlteredQueryTokenCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(alteredQueryTokenCollectionResponse),
        "value": n => { alteredQueryTokenCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAlteredQueryToken) as any ; },
    }
}
