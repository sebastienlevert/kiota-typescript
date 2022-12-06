import {AlertTrigger} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlertTrigger(alertTrigger: AlertTrigger | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { alertTrigger.name = n.getStringValue() as any ; },
        "@odata.type": n => { alertTrigger.odataType = n.getStringValue() as any ; },
        "type": n => { alertTrigger.type = n.getStringValue() as any ; },
        "value": n => { alertTrigger.value = n.getStringValue() as any ; },
    }
}
