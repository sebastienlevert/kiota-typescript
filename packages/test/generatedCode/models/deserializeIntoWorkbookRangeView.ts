import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoJson} from './deserializeIntoJson';
import {WorkbookRangeView} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeView(workbookRangeView: WorkbookRangeView | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRangeView),
        "cellAddresses": n => { workbookRangeView.cellAddresses = n.getObject(deserializeIntoJson) as any ; },
        "columnCount": n => { workbookRangeView.columnCount = n.getNumberValue() as any ; },
        "formulas": n => { workbookRangeView.formulas = n.getObject(deserializeIntoJson) as any ; },
        "formulasLocal": n => { workbookRangeView.formulasLocal = n.getObject(deserializeIntoJson) as any ; },
        "formulasR1C1": n => { workbookRangeView.formulasR1C1 = n.getObject(deserializeIntoJson) as any ; },
        "index": n => { workbookRangeView.index = n.getNumberValue() as any ; },
        "numberFormat": n => { workbookRangeView.numberFormat = n.getObject(deserializeIntoJson) as any ; },
        "rowCount": n => { workbookRangeView.rowCount = n.getNumberValue() as any ; },
        "rows": n => { workbookRangeView.rows = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookRangeView) as any ; },
        "text": n => { workbookRangeView.text = n.getObject(deserializeIntoJson) as any ; },
        "values": n => { workbookRangeView.values = n.getObject(deserializeIntoJson) as any ; },
        "valueTypes": n => { workbookRangeView.valueTypes = n.getObject(deserializeIntoJson) as any ; },
    }
}
