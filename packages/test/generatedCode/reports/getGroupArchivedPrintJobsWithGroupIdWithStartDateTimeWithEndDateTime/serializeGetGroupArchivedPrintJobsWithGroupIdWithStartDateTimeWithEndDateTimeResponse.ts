import {serializeArchivedPrintJob} from '../../models/serializeArchivedPrintJob';
import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse(writer: SerializationWriter, getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse: GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse.value as any, serializeArchivedPrintJob);
}
