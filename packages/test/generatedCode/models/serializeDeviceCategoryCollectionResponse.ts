import {DeviceCategoryCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceCategory} from './serializeDeviceCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCategoryCollectionResponse(writer: SerializationWriter, deviceCategoryCollectionResponse: DeviceCategoryCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCategoryCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceCategoryCollectionResponse.value as any, serializeDeviceCategory);
}
