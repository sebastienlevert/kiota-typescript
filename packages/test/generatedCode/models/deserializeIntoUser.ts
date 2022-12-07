import {User} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUser(user: User | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "email": n => { user.email = n.getStringValue() as any ; },
        "firstName": n => { user.firstName = n.getStringValue() as any ; },
        "id": n => { user.id = n.getNumberValue() as any ; },
        "lastName": n => { user.lastName = n.getStringValue() as any ; },
        "password": n => { user.password = n.getStringValue() as any ; },
        "phone": n => { user.phone = n.getStringValue() as any ; },
        "username": n => { user.username = n.getStringValue() as any ; },
        "userStatus": n => { user.userStatus = n.getNumberValue() as any ; },
    }
}
