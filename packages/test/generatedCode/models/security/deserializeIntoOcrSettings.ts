import {OcrSettings} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOcrSettings(ocrSettings: OcrSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isEnabled": n => { ocrSettings.isEnabled = n.getBooleanValue() as any ; },
        "maxImageSize": n => { ocrSettings.maxImageSize = n.getNumberValue() as any ; },
        "@odata.type": n => { ocrSettings.odataType = n.getStringValue() as any ; },
        "timeout": n => { ocrSettings.timeout = n.getDurationValue() as any ; },
    }
}
