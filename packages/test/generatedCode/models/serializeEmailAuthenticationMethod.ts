import {EmailAuthenticationMethod} from './index';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmailAuthenticationMethod(writer: SerializationWriter, emailAuthenticationMethod: EmailAuthenticationMethod | undefined = {}) : void {
        serializeAuthenticationMethod(writer, emailAuthenticationMethod)
            writer.writeStringValue("emailAddress", emailAuthenticationMethod.emailAddress);
}
