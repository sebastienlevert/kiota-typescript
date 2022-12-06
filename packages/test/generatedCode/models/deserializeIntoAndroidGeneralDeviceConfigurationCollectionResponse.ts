import {deserializeIntoAndroidGeneralDeviceConfiguration} from './deserializeIntoAndroidGeneralDeviceConfiguration';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AndroidGeneralDeviceConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidGeneralDeviceConfigurationCollectionResponse(androidGeneralDeviceConfigurationCollectionResponse: AndroidGeneralDeviceConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(androidGeneralDeviceConfigurationCollectionResponse),
        "value": n => { androidGeneralDeviceConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAndroidGeneralDeviceConfiguration) as any ; },
    }
}
