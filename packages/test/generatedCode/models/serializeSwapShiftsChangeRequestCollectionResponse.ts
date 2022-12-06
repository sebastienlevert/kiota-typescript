import {SwapShiftsChangeRequestCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSwapShiftsChangeRequest} from './serializeSwapShiftsChangeRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSwapShiftsChangeRequestCollectionResponse(writer: SerializationWriter, swapShiftsChangeRequestCollectionResponse: SwapShiftsChangeRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, swapShiftsChangeRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", swapShiftsChangeRequestCollectionResponse.value as any, serializeSwapShiftsChangeRequest);
}
