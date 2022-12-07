import {EditAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEditAction(editAction: EditAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
