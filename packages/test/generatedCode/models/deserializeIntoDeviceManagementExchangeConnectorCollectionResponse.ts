import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceManagementExchangeConnector} from './deserializeIntoDeviceManagementExchangeConnector';
import {DeviceManagementExchangeConnectorCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementExchangeConnectorCollectionResponse(deviceManagementExchangeConnectorCollectionResponse: DeviceManagementExchangeConnectorCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceManagementExchangeConnectorCollectionResponse),
        "value": n => { deviceManagementExchangeConnectorCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceManagementExchangeConnector) as any ; },
    }
}
