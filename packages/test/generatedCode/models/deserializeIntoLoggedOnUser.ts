import {LoggedOnUser} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLoggedOnUser(loggedOnUser: LoggedOnUser | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "lastLogOnDateTime": n => { loggedOnUser.lastLogOnDateTime = n.getDateValue() as any ; },
        "userId": n => { loggedOnUser.userId = n.getStringValue() as any ; },
    }
}
