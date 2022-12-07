import {Workbook} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookApplication} from './serializeWorkbookApplication';
import {serializeWorkbookComment} from './serializeWorkbookComment';
import {serializeWorkbookFunctions} from './serializeWorkbookFunctions';
import {serializeWorkbookNamedItem} from './serializeWorkbookNamedItem';
import {serializeWorkbookOperation} from './serializeWorkbookOperation';
import {serializeWorkbookTable} from './serializeWorkbookTable';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbook(writer: SerializationWriter, workbook: Workbook | undefined = {}) : void {
        serializeEntity(writer, workbook)
            writer.writeObjectValueFromMethod("application", workbook.application as any, serializeWorkbookApplication);
            writer.writeCollectionOfObjectValuesFromMethod("comments", workbook.comments as any, serializeWorkbookComment);
            writer.writeObjectValueFromMethod("functions", workbook.functions as any, serializeWorkbookFunctions);
            writer.writeCollectionOfObjectValuesFromMethod("names", workbook.names as any, serializeWorkbookNamedItem);
            writer.writeCollectionOfObjectValuesFromMethod("operations", workbook.operations as any, serializeWorkbookOperation);
            writer.writeCollectionOfObjectValuesFromMethod("tables", workbook.tables as any, serializeWorkbookTable);
            writer.writeCollectionOfObjectValuesFromMethod("worksheets", workbook.worksheets as any, serializeWorkbookWorksheet);
}
