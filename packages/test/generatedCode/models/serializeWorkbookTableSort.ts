import {WorkbookTableSort} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookSortField} from './serializeWorkbookSortField';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTableSort(writer: SerializationWriter, workbookTableSort: WorkbookTableSort | undefined = {}) : void {
        serializeEntity(writer, workbookTableSort)
            writer.writeCollectionOfObjectValuesFromMethod("fields", workbookTableSort.fields as any, serializeWorkbookSortField);
            writer.writeBooleanValue("matchCase", workbookTableSort.matchCase);
            writer.writeStringValue("method", workbookTableSort.method);
}
