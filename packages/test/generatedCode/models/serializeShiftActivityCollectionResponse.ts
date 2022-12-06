import {ShiftActivityCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeShiftActivity} from './serializeShiftActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShiftActivityCollectionResponse(writer: SerializationWriter, shiftActivityCollectionResponse: ShiftActivityCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, shiftActivityCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", shiftActivityCollectionResponse.value as any, serializeShiftActivity);
}
