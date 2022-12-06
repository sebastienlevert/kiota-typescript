import {ReportRoot} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePrintUsageByPrinter} from './serializePrintUsageByPrinter';
import {serializePrintUsageByUser} from './serializePrintUsageByUser';
import {serializeSecurityReportsRoot} from './serializeSecurityReportsRoot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReportRoot(writer: SerializationWriter, reportRoot: ReportRoot | undefined = {}) : void {
        serializeEntity(writer, reportRoot)
            writer.writeCollectionOfObjectValuesFromMethod("dailyPrintUsageByPrinter", reportRoot.dailyPrintUsageByPrinter as any, serializePrintUsageByPrinter);
            writer.writeCollectionOfObjectValuesFromMethod("dailyPrintUsageByUser", reportRoot.dailyPrintUsageByUser as any, serializePrintUsageByUser);
            writer.writeCollectionOfObjectValuesFromMethod("monthlyPrintUsageByPrinter", reportRoot.monthlyPrintUsageByPrinter as any, serializePrintUsageByPrinter);
            writer.writeCollectionOfObjectValuesFromMethod("monthlyPrintUsageByUser", reportRoot.monthlyPrintUsageByUser as any, serializePrintUsageByUser);
            writer.writeObjectValueFromMethod("security", reportRoot.security as any, serializeSecurityReportsRoot);
}
