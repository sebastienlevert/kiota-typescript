import {Entity} from '../';
import {OcrSettings, RedundancyDetectionSettings, TopicModelingSettings} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryCaseSettings extends Entity, Partial<Parsable> {
    /** The OCR (Optical Character Recognition) settings for the case. */
    ocr?: OcrSettings;
    /** The redundancy (near duplicate and email threading) detection settings for the case. */
    redundancyDetection?: RedundancyDetectionSettings;
    /** The Topic Modeling (Themes) settings for the case. */
    topicModeling?: TopicModelingSettings;
}
