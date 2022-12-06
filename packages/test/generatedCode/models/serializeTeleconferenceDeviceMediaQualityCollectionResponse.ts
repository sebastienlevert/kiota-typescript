import {TeleconferenceDeviceMediaQualityCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeleconferenceDeviceMediaQuality} from './serializeTeleconferenceDeviceMediaQuality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeleconferenceDeviceMediaQualityCollectionResponse(writer: SerializationWriter, teleconferenceDeviceMediaQualityCollectionResponse: TeleconferenceDeviceMediaQualityCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teleconferenceDeviceMediaQualityCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", teleconferenceDeviceMediaQualityCollectionResponse.value as any, serializeTeleconferenceDeviceMediaQuality);
}
