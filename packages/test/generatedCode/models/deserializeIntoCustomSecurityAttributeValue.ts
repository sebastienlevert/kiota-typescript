import {CustomSecurityAttributeValue} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomSecurityAttributeValue(customSecurityAttributeValue: CustomSecurityAttributeValue | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
