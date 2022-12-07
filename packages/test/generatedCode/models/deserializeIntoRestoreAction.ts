import {RestoreAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRestoreAction(restoreAction: RestoreAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
