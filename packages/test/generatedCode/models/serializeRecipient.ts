import {EmailAddress} from './emailAddress';
import {EmailAddress, Recipient} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecipient(writer: SerializationWriter, recipient: Recipient | undefined = {}) : void {
            writer.writeObjectValue<EmailAddress>("emailAddress", recipient.emailAddress);
}
