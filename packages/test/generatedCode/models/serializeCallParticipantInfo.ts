import {CallParticipantInfo} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallParticipantInfo(writer: SerializationWriter, callParticipantInfo: CallParticipantInfo | undefined = {}) : void {
            writer.writeStringValue("@odata.type", callParticipantInfo.odataType);
            writer.writeObjectValueFromMethod("participant", callParticipantInfo.participant as any, serializeIdentitySet);
}
