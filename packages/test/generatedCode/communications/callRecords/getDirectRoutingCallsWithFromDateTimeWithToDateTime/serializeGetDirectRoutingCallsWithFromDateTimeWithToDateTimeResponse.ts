import {serializeDirectRoutingLogRow} from '../../../models/callRecords/serializeDirectRoutingLogRow';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse(writer: SerializationWriter, getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse: GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse.value as any, serializeDirectRoutingLogRow);
}
