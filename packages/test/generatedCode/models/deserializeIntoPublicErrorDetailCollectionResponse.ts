import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPublicErrorDetail} from './deserializeIntoPublicErrorDetail';
import {PublicErrorDetailCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPublicErrorDetailCollectionResponse(publicErrorDetailCollectionResponse: PublicErrorDetailCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(publicErrorDetailCollectionResponse),
        "value": n => { publicErrorDetailCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPublicErrorDetail) as any ; },
    }
}
