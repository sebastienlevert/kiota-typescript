import {UserIdentity} from './index';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserIdentity(writer: SerializationWriter, userIdentity: UserIdentity | undefined = {}) : void {
        serializeIdentity(writer, userIdentity)
            writer.writeStringValue("ipAddress", userIdentity.ipAddress);
            writer.writeStringValue("userPrincipalName", userIdentity.userPrincipalName);
}
