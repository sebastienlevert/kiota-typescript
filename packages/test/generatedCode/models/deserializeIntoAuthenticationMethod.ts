import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethod(authenticationMethod: AuthenticationMethod | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationMethod),
    }
}
