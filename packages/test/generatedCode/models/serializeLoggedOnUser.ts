import {LoggedOnUser} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLoggedOnUser(writer: SerializationWriter, loggedOnUser: LoggedOnUser | undefined = {}) : void {
            writer.writeDateValue("lastLogOnDateTime", loggedOnUser.lastLogOnDateTime);
            writer.writeStringValue("userId", loggedOnUser.userId);
}
