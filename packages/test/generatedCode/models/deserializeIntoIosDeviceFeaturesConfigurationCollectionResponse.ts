import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosDeviceFeaturesConfiguration} from './deserializeIntoIosDeviceFeaturesConfiguration';
import {IosDeviceFeaturesConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosDeviceFeaturesConfigurationCollectionResponse(iosDeviceFeaturesConfigurationCollectionResponse: IosDeviceFeaturesConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosDeviceFeaturesConfigurationCollectionResponse),
        "value": n => { iosDeviceFeaturesConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosDeviceFeaturesConfiguration) as any ; },
    }
}
