import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTeleconferenceDeviceMediaQuality} from './deserializeIntoTeleconferenceDeviceMediaQuality';
import {TeleconferenceDeviceMediaQualityCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeleconferenceDeviceMediaQualityCollectionResponse(teleconferenceDeviceMediaQualityCollectionResponse: TeleconferenceDeviceMediaQualityCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teleconferenceDeviceMediaQualityCollectionResponse),
        "value": n => { teleconferenceDeviceMediaQualityCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeleconferenceDeviceMediaQuality) as any ; },
    }
}
