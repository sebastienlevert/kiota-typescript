import {MessageSecurityState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageSecurityState(messageSecurityState: MessageSecurityState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "connectingIP": n => { messageSecurityState.connectingIP = n.getStringValue() as any ; },
        "deliveryAction": n => { messageSecurityState.deliveryAction = n.getStringValue() as any ; },
        "deliveryLocation": n => { messageSecurityState.deliveryLocation = n.getStringValue() as any ; },
        "directionality": n => { messageSecurityState.directionality = n.getStringValue() as any ; },
        "internetMessageId": n => { messageSecurityState.internetMessageId = n.getStringValue() as any ; },
        "messageFingerprint": n => { messageSecurityState.messageFingerprint = n.getStringValue() as any ; },
        "messageReceivedDateTime": n => { messageSecurityState.messageReceivedDateTime = n.getDateValue() as any ; },
        "messageSubject": n => { messageSecurityState.messageSubject = n.getStringValue() as any ; },
        "networkMessageId": n => { messageSecurityState.networkMessageId = n.getStringValue() as any ; },
        "@odata.type": n => { messageSecurityState.odataType = n.getStringValue() as any ; },
    }
}
