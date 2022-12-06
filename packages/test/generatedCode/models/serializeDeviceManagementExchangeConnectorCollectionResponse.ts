import {DeviceManagementExchangeConnectorCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceManagementExchangeConnector} from './serializeDeviceManagementExchangeConnector';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementExchangeConnectorCollectionResponse(writer: SerializationWriter, deviceManagementExchangeConnectorCollectionResponse: DeviceManagementExchangeConnectorCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceManagementExchangeConnectorCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceManagementExchangeConnectorCollectionResponse.value as any, serializeDeviceManagementExchangeConnector);
}
