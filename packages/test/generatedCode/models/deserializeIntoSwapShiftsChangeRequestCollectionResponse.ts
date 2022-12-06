import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSwapShiftsChangeRequest} from './deserializeIntoSwapShiftsChangeRequest';
import {SwapShiftsChangeRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSwapShiftsChangeRequestCollectionResponse(swapShiftsChangeRequestCollectionResponse: SwapShiftsChangeRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(swapShiftsChangeRequestCollectionResponse),
        "value": n => { swapShiftsChangeRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSwapShiftsChangeRequest) as any ; },
    }
}
