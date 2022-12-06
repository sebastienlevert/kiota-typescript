import {RevokeSignInSessionsResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRevokeSignInSessionsResponse(writer: SerializationWriter, revokeSignInSessionsResponse: RevokeSignInSessionsResponse | undefined = {}) : void {
            writer.writeBooleanValue("value", revokeSignInSessionsResponse.value);
}
