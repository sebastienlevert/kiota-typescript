import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookRangeFill} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeFill(workbookRangeFill: WorkbookRangeFill | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRangeFill),
        "color": n => { workbookRangeFill.color = n.getStringValue() as any ; },
    }
}
