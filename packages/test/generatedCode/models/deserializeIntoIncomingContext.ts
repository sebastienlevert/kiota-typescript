import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {IncomingContext} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIncomingContext(incomingContext: IncomingContext | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "observedParticipantId": n => { incomingContext.observedParticipantId = n.getStringValue() as any ; },
        "@odata.type": n => { incomingContext.odataType = n.getStringValue() as any ; },
        "onBehalfOf": n => { incomingContext.onBehalfOf = n.getObject(deserializeIntoIdentitySet) as any ; },
        "sourceParticipantId": n => { incomingContext.sourceParticipantId = n.getStringValue() as any ; },
        "transferor": n => { incomingContext.transferor = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
