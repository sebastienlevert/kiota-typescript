import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {PasswordAuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordAuthenticationMethod(passwordAuthenticationMethod: PasswordAuthenticationMethod | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(passwordAuthenticationMethod),
        "createdDateTime": n => { passwordAuthenticationMethod.createdDateTime = n.getDateValue() as any ; },
        "creationDateTime": n => { passwordAuthenticationMethod.creationDateTime = n.getDateValue() as any ; },
        "password": n => { passwordAuthenticationMethod.password = n.getStringValue() as any ; },
    }
}
