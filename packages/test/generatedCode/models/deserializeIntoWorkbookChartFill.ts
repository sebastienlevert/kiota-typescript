import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookChartFill} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartFill(workbookChartFill: WorkbookChartFill | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartFill),
    }
}
