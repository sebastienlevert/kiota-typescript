import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPrintUsageByPrinter} from './deserializeIntoPrintUsageByPrinter';
import {deserializeIntoPrintUsageByUser} from './deserializeIntoPrintUsageByUser';
import {deserializeIntoSecurityReportsRoot} from './deserializeIntoSecurityReportsRoot';
import {ReportRoot} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReportRoot(reportRoot: ReportRoot | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(reportRoot),
        "dailyPrintUsageByPrinter": n => { reportRoot.dailyPrintUsageByPrinter = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintUsageByPrinter) as any ; },
        "dailyPrintUsageByUser": n => { reportRoot.dailyPrintUsageByUser = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintUsageByUser) as any ; },
        "monthlyPrintUsageByPrinter": n => { reportRoot.monthlyPrintUsageByPrinter = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintUsageByPrinter) as any ; },
        "monthlyPrintUsageByUser": n => { reportRoot.monthlyPrintUsageByUser = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintUsageByUser) as any ; },
        "security": n => { reportRoot.security = n.getObject(deserializeIntoSecurityReportsRoot) as any ; },
    }
}
