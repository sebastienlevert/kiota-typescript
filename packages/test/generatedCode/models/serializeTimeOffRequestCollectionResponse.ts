import {TimeOffRequestCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTimeOffRequest} from './serializeTimeOffRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeOffRequestCollectionResponse(writer: SerializationWriter, timeOffRequestCollectionResponse: TimeOffRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, timeOffRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", timeOffRequestCollectionResponse.value as any, serializeTimeOffRequest);
}
