import {serializePstnCallLogRow} from '../../../models/callRecords/serializePstnCallLogRow';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetPstnCallsWithFromDateTimeWithToDateTimeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetPstnCallsWithFromDateTimeWithToDateTimeResponse(writer: SerializationWriter, getPstnCallsWithFromDateTimeWithToDateTimeResponse: GetPstnCallsWithFromDateTimeWithToDateTimeResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getPstnCallsWithFromDateTimeWithToDateTimeResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getPstnCallsWithFromDateTimeWithToDateTimeResponse.value as any, serializePstnCallLogRow);
}
