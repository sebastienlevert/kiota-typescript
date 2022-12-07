import {Tag} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTag(tag: Tag | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { tag.id = n.getNumberValue() as any ; },
        "name": n => { tag.name = n.getStringValue() as any ; },
    }
}
