import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartFont} from './deserializeIntoWorkbookChartFont';
import {WorkbookChartAxisTitleFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartAxisTitleFormat(workbookChartAxisTitleFormat: WorkbookChartAxisTitleFormat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartAxisTitleFormat),
        "font": n => { workbookChartAxisTitleFormat.font = n.getObject(deserializeIntoWorkbookChartFont) as any ; },
    }
}
