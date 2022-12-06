import {WorkbookRangeSort} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookRangeSort(writer: SerializationWriter, workbookRangeSort: WorkbookRangeSort | undefined = {}) : void {
        serializeEntity(writer, workbookRangeSort)
}
