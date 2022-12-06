import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoOcrSettings} from './deserializeIntoOcrSettings';
import {deserializeIntoRedundancyDetectionSettings} from './deserializeIntoRedundancyDetectionSettings';
import {deserializeIntoTopicModelingSettings} from './deserializeIntoTopicModelingSettings';
import {EdiscoveryCaseSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryCaseSettings(ediscoveryCaseSettings: EdiscoveryCaseSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(ediscoveryCaseSettings),
        "ocr": n => { ediscoveryCaseSettings.ocr = n.getObject(deserializeIntoOcrSettings) as any ; },
        "redundancyDetection": n => { ediscoveryCaseSettings.redundancyDetection = n.getObject(deserializeIntoRedundancyDetectionSettings) as any ; },
        "topicModeling": n => { ediscoveryCaseSettings.topicModeling = n.getObject(deserializeIntoTopicModelingSettings) as any ; },
    }
}
