import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {CallParticipantInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallParticipantInfo(callParticipantInfo: CallParticipantInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { callParticipantInfo.odataType = n.getStringValue() as any ; },
        "participant": n => { callParticipantInfo.participant = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
