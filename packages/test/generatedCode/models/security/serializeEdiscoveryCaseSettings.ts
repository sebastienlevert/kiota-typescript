import {serializeEntity} from '../serializeEntity';
import {EdiscoveryCaseSettings} from './index';
import {serializeOcrSettings} from './serializeOcrSettings';
import {serializeRedundancyDetectionSettings} from './serializeRedundancyDetectionSettings';
import {serializeTopicModelingSettings} from './serializeTopicModelingSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryCaseSettings(writer: SerializationWriter, ediscoveryCaseSettings: EdiscoveryCaseSettings | undefined = {}) : void {
        serializeEntity(writer, ediscoveryCaseSettings)
            writer.writeObjectValueFromMethod("ocr", ediscoveryCaseSettings.ocr as any, serializeOcrSettings);
            writer.writeObjectValueFromMethod("redundancyDetection", ediscoveryCaseSettings.redundancyDetection as any, serializeRedundancyDetectionSettings);
            writer.writeObjectValueFromMethod("topicModeling", ediscoveryCaseSettings.topicModeling as any, serializeTopicModelingSettings);
}
