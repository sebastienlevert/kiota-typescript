import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {EmailIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailIdentity(emailIdentity: EmailIdentity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(emailIdentity),
        "email": n => { emailIdentity.email = n.getStringValue() as any ; },
    }
}
