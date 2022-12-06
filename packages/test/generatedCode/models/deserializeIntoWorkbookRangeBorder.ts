import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookRangeBorder} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeBorder(workbookRangeBorder: WorkbookRangeBorder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRangeBorder),
        "color": n => { workbookRangeBorder.color = n.getStringValue() as any ; },
        "sideIndex": n => { workbookRangeBorder.sideIndex = n.getStringValue() as any ; },
        "style": n => { workbookRangeBorder.style = n.getStringValue() as any ; },
        "weight": n => { workbookRangeBorder.weight = n.getStringValue() as any ; },
    }
}
