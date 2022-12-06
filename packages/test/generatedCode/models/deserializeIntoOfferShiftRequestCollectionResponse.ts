import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOfferShiftRequest} from './deserializeIntoOfferShiftRequest';
import {OfferShiftRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOfferShiftRequestCollectionResponse(offerShiftRequestCollectionResponse: OfferShiftRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(offerShiftRequestCollectionResponse),
        "value": n => { offerShiftRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOfferShiftRequest) as any ; },
    }
}
