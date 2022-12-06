import {RedundancyDetectionSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRedundancyDetectionSettings(redundancyDetectionSettings: RedundancyDetectionSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isEnabled": n => { redundancyDetectionSettings.isEnabled = n.getBooleanValue() as any ; },
        "maxWords": n => { redundancyDetectionSettings.maxWords = n.getNumberValue() as any ; },
        "minWords": n => { redundancyDetectionSettings.minWords = n.getNumberValue() as any ; },
        "@odata.type": n => { redundancyDetectionSettings.odataType = n.getStringValue() as any ; },
        "similarityThreshold": n => { redundancyDetectionSettings.similarityThreshold = n.getNumberValue() as any ; },
    }
}
