import {Recipient} from './index';
import {serializeEmailAddress} from './serializeEmailAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecipient(writer: SerializationWriter, recipient: Recipient | undefined = {}) : void {
            writer.writeObjectValueFromMethod("emailAddress", recipient.emailAddress as any, serializeEmailAddress);
}
