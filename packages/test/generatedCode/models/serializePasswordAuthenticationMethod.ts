import {PasswordAuthenticationMethod} from './index';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePasswordAuthenticationMethod(writer: SerializationWriter, passwordAuthenticationMethod: PasswordAuthenticationMethod | undefined = {}) : void {
        serializeAuthenticationMethod(writer, passwordAuthenticationMethod)
            writer.writeDateValue("createdDateTime", passwordAuthenticationMethod.createdDateTime);
            writer.writeDateValue("creationDateTime", passwordAuthenticationMethod.creationDateTime);
            writer.writeStringValue("password", passwordAuthenticationMethod.password);
}
