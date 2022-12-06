import {ChangeType} from './changeType';
import {CommsNotification} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCommsNotification(commsNotification: CommsNotification | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "changeType": n => { commsNotification.changeType = n.getEnumValue<ChangeType>(ChangeType) as any ; },
        "@odata.type": n => { commsNotification.odataType = n.getStringValue() as any ; },
        "resourceUrl": n => { commsNotification.resourceUrl = n.getStringValue() as any ; },
    }
}
