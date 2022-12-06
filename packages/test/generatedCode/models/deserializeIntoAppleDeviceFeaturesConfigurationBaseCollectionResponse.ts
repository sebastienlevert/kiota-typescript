import {deserializeIntoAppleDeviceFeaturesConfigurationBase} from './deserializeIntoAppleDeviceFeaturesConfigurationBase';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AppleDeviceFeaturesConfigurationBaseCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppleDeviceFeaturesConfigurationBaseCollectionResponse(appleDeviceFeaturesConfigurationBaseCollectionResponse: AppleDeviceFeaturesConfigurationBaseCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(appleDeviceFeaturesConfigurationBaseCollectionResponse),
        "value": n => { appleDeviceFeaturesConfigurationBaseCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppleDeviceFeaturesConfigurationBase) as any ; },
    }
}
