import {deserializeIntoInvitationParticipantInfo} from '../../../../models/deserializeIntoInvitationParticipantInfo';
import {RedirectPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRedirectPostRequestBody(redirectPostRequestBody: RedirectPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "callbackUri": n => { redirectPostRequestBody.callbackUri = n.getStringValue() as any ; },
        "targets": n => { redirectPostRequestBody.targets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInvitationParticipantInfo) as any ; },
        "timeout": n => { redirectPostRequestBody.timeout = n.getNumberValue() as any ; },
    }
}
