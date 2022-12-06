import {SecureScoreControlStateUpdate} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecureScoreControlStateUpdate(writer: SerializationWriter, secureScoreControlStateUpdate: SecureScoreControlStateUpdate | undefined = {}) : void {
            writer.writeStringValue("assignedTo", secureScoreControlStateUpdate.assignedTo);
            writer.writeStringValue("comment", secureScoreControlStateUpdate.comment);
            writer.writeStringValue("@odata.type", secureScoreControlStateUpdate.odataType);
            writer.writeStringValue("state", secureScoreControlStateUpdate.state);
            writer.writeStringValue("updatedBy", secureScoreControlStateUpdate.updatedBy);
            writer.writeDateValue("updatedDateTime", secureScoreControlStateUpdate.updatedDateTime);
}
