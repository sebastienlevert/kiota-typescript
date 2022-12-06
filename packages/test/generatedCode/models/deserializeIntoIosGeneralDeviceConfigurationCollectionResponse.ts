import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosGeneralDeviceConfiguration} from './deserializeIntoIosGeneralDeviceConfiguration';
import {IosGeneralDeviceConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosGeneralDeviceConfigurationCollectionResponse(iosGeneralDeviceConfigurationCollectionResponse: IosGeneralDeviceConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosGeneralDeviceConfigurationCollectionResponse),
        "value": n => { iosGeneralDeviceConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosGeneralDeviceConfiguration) as any ; },
    }
}
