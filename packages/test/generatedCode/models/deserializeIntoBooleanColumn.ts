import {BooleanColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBooleanColumn(booleanColumn: BooleanColumn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
