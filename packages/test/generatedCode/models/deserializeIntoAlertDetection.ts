import {AlertDetection} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlertDetection(alertDetection: AlertDetection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "detectionType": n => { alertDetection.detectionType = n.getStringValue() as any ; },
        "method": n => { alertDetection.method = n.getStringValue() as any ; },
        "name": n => { alertDetection.name = n.getStringValue() as any ; },
        "@odata.type": n => { alertDetection.odataType = n.getStringValue() as any ; },
    }
}
