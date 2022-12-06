import {TimeOffCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTimeOff} from './serializeTimeOff';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeOffCollectionResponse(writer: SerializationWriter, timeOffCollectionResponse: TimeOffCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, timeOffCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", timeOffCollectionResponse.value as any, serializeTimeOff);
}
