import {Category} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCategory(category: Category | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { category.id = n.getNumberValue() as any ; },
        "name": n => { category.name = n.getStringValue() as any ; },
    }
}
