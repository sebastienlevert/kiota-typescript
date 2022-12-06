import {ShiftCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeShift} from './serializeShift';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShiftCollectionResponse(writer: SerializationWriter, shiftCollectionResponse: ShiftCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, shiftCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", shiftCollectionResponse.value as any, serializeShift);
}
