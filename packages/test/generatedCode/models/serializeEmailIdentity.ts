import {EmailIdentity} from './index';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmailIdentity(writer: SerializationWriter, emailIdentity: EmailIdentity | undefined = {}) : void {
        serializeIdentity(writer, emailIdentity)
            writer.writeStringValue("email", emailIdentity.email);
}
