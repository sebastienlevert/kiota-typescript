import {serializeArchivedPrintJob} from '../../models/serializeArchivedPrintJob';
import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse(writer: SerializationWriter, getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse: GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse.value as any, serializeArchivedPrintJob);
}
