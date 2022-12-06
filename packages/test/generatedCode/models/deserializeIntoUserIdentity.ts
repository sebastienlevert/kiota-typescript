import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {UserIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserIdentity(userIdentity: UserIdentity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(userIdentity),
        "ipAddress": n => { userIdentity.ipAddress = n.getStringValue() as any ; },
        "userPrincipalName": n => { userIdentity.userPrincipalName = n.getStringValue() as any ; },
    }
}
