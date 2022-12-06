import {AuthenticationMethod} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethod(writer: SerializationWriter, authenticationMethod: AuthenticationMethod | undefined = {}) : void {
        serializeEntity(writer, authenticationMethod)
}
