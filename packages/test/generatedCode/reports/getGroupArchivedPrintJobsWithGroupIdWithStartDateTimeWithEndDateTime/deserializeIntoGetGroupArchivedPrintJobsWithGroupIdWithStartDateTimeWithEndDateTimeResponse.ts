import {deserializeIntoArchivedPrintJob} from '../../models/deserializeIntoArchivedPrintJob';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse(getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse: GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse),
        "value": n => { getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoArchivedPrintJob) as any ; },
    }
}
