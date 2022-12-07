import {Json} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoJson(json: Json | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
