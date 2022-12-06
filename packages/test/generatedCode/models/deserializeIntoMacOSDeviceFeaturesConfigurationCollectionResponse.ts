import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMacOSDeviceFeaturesConfiguration} from './deserializeIntoMacOSDeviceFeaturesConfiguration';
import {MacOSDeviceFeaturesConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSDeviceFeaturesConfigurationCollectionResponse(macOSDeviceFeaturesConfigurationCollectionResponse: MacOSDeviceFeaturesConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(macOSDeviceFeaturesConfigurationCollectionResponse),
        "value": n => { macOSDeviceFeaturesConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMacOSDeviceFeaturesConfiguration) as any ; },
    }
}
