import {EmailAddress} from './emailAddress';
import {EmailAddress, Recipient} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecipient(recipient: Recipient | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "emailAddress": n => { recipient.emailAddress = n.deserializeIntoEmailAddressInterface(); },
    }
}
