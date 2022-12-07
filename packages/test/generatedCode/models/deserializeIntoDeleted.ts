import {Deleted} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeleted(deleted: Deleted | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "state": n => { deleted.state = n.getStringValue() as any ; },
    }
}
