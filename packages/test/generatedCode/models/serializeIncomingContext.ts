import {IncomingContext} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIncomingContext(writer: SerializationWriter, incomingContext: IncomingContext | undefined = {}) : void {
            writer.writeStringValue("observedParticipantId", incomingContext.observedParticipantId);
            writer.writeStringValue("@odata.type", incomingContext.odataType);
            writer.writeObjectValueFromMethod("onBehalfOf", incomingContext.onBehalfOf as any, serializeIdentitySet);
            writer.writeStringValue("sourceParticipantId", incomingContext.sourceParticipantId);
            writer.writeObjectValueFromMethod("transferor", incomingContext.transferor as any, serializeIdentitySet);
}
