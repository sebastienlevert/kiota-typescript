import {TimeOffReasonCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTimeOffReason} from './serializeTimeOffReason';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeOffReasonCollectionResponse(writer: SerializationWriter, timeOffReasonCollectionResponse: TimeOffReasonCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, timeOffReasonCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", timeOffReasonCollectionResponse.value as any, serializeTimeOffReason);
}
