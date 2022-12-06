import {SecureScoreControlStateUpdate} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecureScoreControlStateUpdate(secureScoreControlStateUpdate: SecureScoreControlStateUpdate | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "assignedTo": n => { secureScoreControlStateUpdate.assignedTo = n.getStringValue() as any ; },
        "comment": n => { secureScoreControlStateUpdate.comment = n.getStringValue() as any ; },
        "@odata.type": n => { secureScoreControlStateUpdate.odataType = n.getStringValue() as any ; },
        "state": n => { secureScoreControlStateUpdate.state = n.getStringValue() as any ; },
        "updatedBy": n => { secureScoreControlStateUpdate.updatedBy = n.getStringValue() as any ; },
        "updatedDateTime": n => { secureScoreControlStateUpdate.updatedDateTime = n.getDateValue() as any ; },
    }
}
