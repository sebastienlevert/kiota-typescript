import {deserializeIntoInvitationParticipantInfo} from '../../../../models/deserializeIntoInvitationParticipantInfo';
import {deserializeIntoParticipantInfo} from '../../../../models/deserializeIntoParticipantInfo';
import {TransferPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTransferPostRequestBody(transferPostRequestBody: TransferPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "transferee": n => { transferPostRequestBody.transferee = n.getObject(deserializeIntoParticipantInfo) as any ; },
        "transferTarget": n => { transferPostRequestBody.transferTarget = n.getObject(deserializeIntoInvitationParticipantInfo) as any ; },
    }
}
