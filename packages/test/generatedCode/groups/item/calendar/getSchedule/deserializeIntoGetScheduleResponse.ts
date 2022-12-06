import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoScheduleInformation} from '../../../../models/deserializeIntoScheduleInformation';
import {GetScheduleResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetScheduleResponse(getScheduleResponse: GetScheduleResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getScheduleResponse),
        "value": n => { getScheduleResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoScheduleInformation) as any ; },
    }
}
