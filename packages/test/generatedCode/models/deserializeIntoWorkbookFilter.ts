import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookFilterCriteria} from './deserializeIntoWorkbookFilterCriteria';
import {WorkbookFilter} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookFilter(workbookFilter: WorkbookFilter | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookFilter),
        "criteria": n => { workbookFilter.criteria = n.getObject(deserializeIntoWorkbookFilterCriteria) as any ; },
    }
}
