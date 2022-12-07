import {PasswordProfile} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordProfile(passwordProfile: PasswordProfile | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "forceChangePasswordNextSignIn": n => { passwordProfile.forceChangePasswordNextSignIn = n.getBooleanValue() as any ; },
        "forceChangePasswordNextSignInWithMfa": n => { passwordProfile.forceChangePasswordNextSignInWithMfa = n.getBooleanValue() as any ; },
        "password": n => { passwordProfile.password = n.getStringValue() as any ; },
    }
}
