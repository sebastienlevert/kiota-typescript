import {ShiftAvailabilityCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeShiftAvailability} from './serializeShiftAvailability';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShiftAvailabilityCollectionResponse(writer: SerializationWriter, shiftAvailabilityCollectionResponse: ShiftAvailabilityCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, shiftAvailabilityCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", shiftAvailabilityCollectionResponse.value as any, serializeShiftAvailability);
}
