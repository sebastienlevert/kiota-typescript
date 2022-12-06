import {serializeInvitationParticipantInfo} from '../../../../models/serializeInvitationParticipantInfo';
import {serializeParticipantInfo} from '../../../../models/serializeParticipantInfo';
import {TransferPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTransferPostRequestBody(writer: SerializationWriter, transferPostRequestBody: TransferPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("transferee", transferPostRequestBody.transferee as any, serializeParticipantInfo);
            writer.writeObjectValueFromMethod("transferTarget", transferPostRequestBody.transferTarget as any, serializeInvitationParticipantInfo);
}
