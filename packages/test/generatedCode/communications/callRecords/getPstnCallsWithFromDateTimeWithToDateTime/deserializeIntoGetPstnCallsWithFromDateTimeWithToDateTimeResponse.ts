import {deserializeIntoPstnCallLogRow} from '../../../models/callRecords/deserializeIntoPstnCallLogRow';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetPstnCallsWithFromDateTimeWithToDateTimeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPstnCallsWithFromDateTimeWithToDateTimeResponse(getPstnCallsWithFromDateTimeWithToDateTimeResponse: GetPstnCallsWithFromDateTimeWithToDateTimeResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getPstnCallsWithFromDateTimeWithToDateTimeResponse),
        "value": n => { getPstnCallsWithFromDateTimeWithToDateTimeResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPstnCallLogRow) as any ; },
    }
}
