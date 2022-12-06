import {deserializeIntoTeleconferenceDeviceQuality} from '../../../models/deserializeIntoTeleconferenceDeviceQuality';
import {LogTeleconferenceDeviceQualityPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLogTeleconferenceDeviceQualityPostRequestBody(logTeleconferenceDeviceQualityPostRequestBody: LogTeleconferenceDeviceQualityPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "quality": n => { logTeleconferenceDeviceQualityPostRequestBody.quality = n.getObject(deserializeIntoTeleconferenceDeviceQuality) as any ; },
    }
}
