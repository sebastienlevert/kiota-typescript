import {ArchivedPrintJob, BaseCollectionPaginationCountResponse} from '../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ArchivedPrintJob[];
}
