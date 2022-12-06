import {deserializeIntoChat} from './deserializeIntoChat';
import {deserializeIntoTeamsAppInstallation} from './deserializeIntoTeamsAppInstallation';
import {UserScopeTeamsAppInstallation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserScopeTeamsAppInstallation(userScopeTeamsAppInstallation: UserScopeTeamsAppInstallation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamsAppInstallation(userScopeTeamsAppInstallation),
        "chat": n => { userScopeTeamsAppInstallation.chat = n.getObject(deserializeIntoChat) as any ; },
    }
}
