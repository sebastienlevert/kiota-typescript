import {PasswordProfile} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePasswordProfile(writer: SerializationWriter, passwordProfile: PasswordProfile | undefined = {}) : void {
            writer.writeBooleanValue("forceChangePasswordNextSignIn", passwordProfile.forceChangePasswordNextSignIn);
            writer.writeBooleanValue("forceChangePasswordNextSignInWithMfa", passwordProfile.forceChangePasswordNextSignInWithMfa);
            writer.writeStringValue("password", passwordProfile.password);
}
