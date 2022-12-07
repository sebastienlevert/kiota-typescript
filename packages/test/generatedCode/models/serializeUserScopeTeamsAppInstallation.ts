import {UserScopeTeamsAppInstallation} from './index';
import {serializeChat} from './serializeChat';
import {serializeTeamsAppInstallation} from './serializeTeamsAppInstallation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserScopeTeamsAppInstallation(writer: SerializationWriter, userScopeTeamsAppInstallation: UserScopeTeamsAppInstallation | undefined = {}) : void {
        serializeTeamsAppInstallation(writer, userScopeTeamsAppInstallation)
            writer.writeObjectValueFromMethod("chat", userScopeTeamsAppInstallation.chat as any, serializeChat);
}
