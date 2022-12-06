import {ArchivedPrintJob, BaseCollectionPaginationCountResponse} from '../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ArchivedPrintJob[];
}
