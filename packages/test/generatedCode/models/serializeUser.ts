import {User} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUser(writer: SerializationWriter, user: User | undefined = {}) : void {
            writer.writeStringValue("email", user.email);
            writer.writeStringValue("firstName", user.firstName);
            writer.writeNumberValue("id", user.id);
            writer.writeStringValue("lastName", user.lastName);
            writer.writeStringValue("password", user.password);
            writer.writeStringValue("phone", user.phone);
            writer.writeStringValue("username", user.username);
            writer.writeNumberValue("userStatus", user.userStatus);
}
