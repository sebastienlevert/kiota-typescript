import {SignInActivity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSignInActivity(writer: SerializationWriter, signInActivity: SignInActivity | undefined = {}) : void {
            writer.writeDateValue("lastNonInteractiveSignInDateTime", signInActivity.lastNonInteractiveSignInDateTime);
            writer.writeStringValue("lastNonInteractiveSignInRequestId", signInActivity.lastNonInteractiveSignInRequestId);
            writer.writeDateValue("lastSignInDateTime", signInActivity.lastSignInDateTime);
            writer.writeStringValue("lastSignInRequestId", signInActivity.lastSignInRequestId);
}
