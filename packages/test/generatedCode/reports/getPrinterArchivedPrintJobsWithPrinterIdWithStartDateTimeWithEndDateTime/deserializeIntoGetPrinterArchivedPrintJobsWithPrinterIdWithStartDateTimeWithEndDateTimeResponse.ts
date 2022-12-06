import {deserializeIntoArchivedPrintJob} from '../../models/deserializeIntoArchivedPrintJob';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse(getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse: GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse),
        "value": n => { getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoArchivedPrintJob) as any ; },
    }
}
