import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceCategory} from './deserializeIntoDeviceCategory';
import {DeviceCategoryCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCategoryCollectionResponse(deviceCategoryCollectionResponse: DeviceCategoryCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceCategoryCollectionResponse),
        "value": n => { deviceCategoryCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceCategory) as any ; },
    }
}
