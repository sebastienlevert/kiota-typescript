import {RevokeSignInSessionsResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRevokeSignInSessionsResponse(revokeSignInSessionsResponse: RevokeSignInSessionsResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { revokeSignInSessionsResponse.value = n.getBooleanValue() as any ; },
    }
}
