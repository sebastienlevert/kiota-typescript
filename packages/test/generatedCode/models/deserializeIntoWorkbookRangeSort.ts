import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookRangeSort} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeSort(workbookRangeSort: WorkbookRangeSort | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRangeSort),
    }
}
