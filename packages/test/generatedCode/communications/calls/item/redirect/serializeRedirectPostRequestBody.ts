import {serializeInvitationParticipantInfo} from '../../../../models/serializeInvitationParticipantInfo';
import {RedirectPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRedirectPostRequestBody(writer: SerializationWriter, redirectPostRequestBody: RedirectPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("callbackUri", redirectPostRequestBody.callbackUri);
            writer.writeCollectionOfObjectValuesFromMethod("targets", redirectPostRequestBody.targets as any, serializeInvitationParticipantInfo);
            writer.writeNumberValue("timeout", redirectPostRequestBody.timeout);
}
