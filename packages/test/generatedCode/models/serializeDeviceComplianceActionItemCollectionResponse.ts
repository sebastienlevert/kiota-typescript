import {DeviceComplianceActionItemCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceComplianceActionItem} from './serializeDeviceComplianceActionItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceActionItemCollectionResponse(writer: SerializationWriter, deviceComplianceActionItemCollectionResponse: DeviceComplianceActionItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceActionItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceComplianceActionItemCollectionResponse.value as any, serializeDeviceComplianceActionItem);
}
