import {OcrSettings} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOcrSettings(writer: SerializationWriter, ocrSettings: OcrSettings | undefined = {}) : void {
            writer.writeBooleanValue("isEnabled", ocrSettings.isEnabled);
            writer.writeNumberValue("maxImageSize", ocrSettings.maxImageSize);
            writer.writeStringValue("@odata.type", ocrSettings.odataType);
            writer.writeDurationValue("timeout", ocrSettings.timeout);
}
