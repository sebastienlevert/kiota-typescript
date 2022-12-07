import {WorkbookIcon} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookIcon(workbookIcon: WorkbookIcon | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "index": n => { workbookIcon.index = n.getNumberValue() as any ; },
        "set": n => { workbookIcon.set = n.getStringValue() as any ; },
    }
}
