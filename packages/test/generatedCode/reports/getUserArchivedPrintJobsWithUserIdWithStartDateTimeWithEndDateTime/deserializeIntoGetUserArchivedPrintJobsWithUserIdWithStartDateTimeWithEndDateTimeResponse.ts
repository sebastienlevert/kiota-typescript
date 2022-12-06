import {deserializeIntoArchivedPrintJob} from '../../models/deserializeIntoArchivedPrintJob';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse(getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse: GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse),
        "value": n => { getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoArchivedPrintJob) as any ; },
    }
}
