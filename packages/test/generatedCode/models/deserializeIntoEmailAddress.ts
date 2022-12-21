import {EmailAddress} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailAddress(emailAddress: EmailAddress | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { emailAddress.address = n.getStringValue() as any ; },
        "name": n => { emailAddress.name = n.getStringValue() as any ; },
    }
}
