import {ArchivedPrintJob, BaseCollectionPaginationCountResponse} from '../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ArchivedPrintJob[];
}
