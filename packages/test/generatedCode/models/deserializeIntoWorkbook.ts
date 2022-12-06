import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookApplication} from './deserializeIntoWorkbookApplication';
import {deserializeIntoWorkbookComment} from './deserializeIntoWorkbookComment';
import {deserializeIntoWorkbookFunctions} from './deserializeIntoWorkbookFunctions';
import {deserializeIntoWorkbookNamedItem} from './deserializeIntoWorkbookNamedItem';
import {deserializeIntoWorkbookOperation} from './deserializeIntoWorkbookOperation';
import {deserializeIntoWorkbookTable} from './deserializeIntoWorkbookTable';
import {deserializeIntoWorkbookWorksheet} from './deserializeIntoWorkbookWorksheet';
import {Workbook} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbook(workbook: Workbook | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbook),
        "application": n => { workbook.application = n.getObject(deserializeIntoWorkbookApplication) as any ; },
        "comments": n => { workbook.comments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookComment) as any ; },
        "functions": n => { workbook.functions = n.getObject(deserializeIntoWorkbookFunctions) as any ; },
        "names": n => { workbook.names = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookNamedItem) as any ; },
        "operations": n => { workbook.operations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookOperation) as any ; },
        "tables": n => { workbook.tables = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookTable) as any ; },
        "worksheets": n => { workbook.worksheets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookWorksheet) as any ; },
    }
}
