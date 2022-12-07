import {deserializeIntoJson} from './deserializeIntoJson';
import {deserializeIntoWorkbookIcon} from './deserializeIntoWorkbookIcon';
import {WorkbookFilterCriteria} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookFilterCriteria(workbookFilterCriteria: WorkbookFilterCriteria | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "color": n => { workbookFilterCriteria.color = n.getStringValue() as any ; },
        "criterion1": n => { workbookFilterCriteria.criterion1 = n.getStringValue() as any ; },
        "criterion2": n => { workbookFilterCriteria.criterion2 = n.getStringValue() as any ; },
        "dynamicCriteria": n => { workbookFilterCriteria.dynamicCriteria = n.getStringValue() as any ; },
        "filterOn": n => { workbookFilterCriteria.filterOn = n.getStringValue() as any ; },
        "icon": n => { workbookFilterCriteria.icon = n.getObject(deserializeIntoWorkbookIcon) as any ; },
        "operator": n => { workbookFilterCriteria.operator = n.getStringValue() as any ; },
        "values": n => { workbookFilterCriteria.values = n.getObject(deserializeIntoJson) as any ; },
    }
}
