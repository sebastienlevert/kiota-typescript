import {serializeTeleconferenceDeviceQuality} from '../../../models/serializeTeleconferenceDeviceQuality';
import {LogTeleconferenceDeviceQualityPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLogTeleconferenceDeviceQualityPostRequestBody(writer: SerializationWriter, logTeleconferenceDeviceQualityPostRequestBody: LogTeleconferenceDeviceQualityPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("quality", logTeleconferenceDeviceQualityPostRequestBody.quality as any, serializeTeleconferenceDeviceQuality);
}
