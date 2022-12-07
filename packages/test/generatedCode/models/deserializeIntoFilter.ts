import {deserializeIntoFilterGroup} from './deserializeIntoFilterGroup';
import {Filter} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilter(filter: Filter | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "categoryFilterGroups": n => { filter.categoryFilterGroups = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFilterGroup) as any ; },
        "groups": n => { filter.groups = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFilterGroup) as any ; },
        "inputFilterGroups": n => { filter.inputFilterGroups = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFilterGroup) as any ; },
    }
}
