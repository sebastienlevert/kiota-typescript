import {OfferShiftRequestCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOfferShiftRequest} from './serializeOfferShiftRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOfferShiftRequestCollectionResponse(writer: SerializationWriter, offerShiftRequestCollectionResponse: OfferShiftRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, offerShiftRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", offerShiftRequestCollectionResponse.value as any, serializeOfferShiftRequest);
}
