import {serializeArchivedPrintJob} from '../../models/serializeArchivedPrintJob';
import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse(writer: SerializationWriter, getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse: GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse.value as any, serializeArchivedPrintJob);
}
