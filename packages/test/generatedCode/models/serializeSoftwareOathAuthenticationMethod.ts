import {SoftwareOathAuthenticationMethod} from './index';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSoftwareOathAuthenticationMethod(writer: SerializationWriter, softwareOathAuthenticationMethod: SoftwareOathAuthenticationMethod | undefined = {}) : void {
        serializeAuthenticationMethod(writer, softwareOathAuthenticationMethod)
            writer.writeStringValue("secretKey", softwareOathAuthenticationMethod.secretKey);
}
