import {SortProperty} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSortProperty(sortProperty: SortProperty | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isDescending": n => { sortProperty.isDescending = n.getBooleanValue() as any ; },
        "name": n => { sortProperty.name = n.getStringValue() as any ; },
        "@odata.type": n => { sortProperty.odataType = n.getStringValue() as any ; },
    }
}
