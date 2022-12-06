import {CallOptions} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallOptions(callOptions: CallOptions | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "hideBotAfterEscalation": n => { callOptions.hideBotAfterEscalation = n.getBooleanValue() as any ; },
        "isContentSharingNotificationEnabled": n => { callOptions.isContentSharingNotificationEnabled = n.getBooleanValue() as any ; },
        "@odata.type": n => { callOptions.odataType = n.getStringValue() as any ; },
    }
}
