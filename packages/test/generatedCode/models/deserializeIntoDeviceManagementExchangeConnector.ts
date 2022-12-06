import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceManagementExchangeConnectorStatus} from './deviceManagementExchangeConnectorStatus';
import {DeviceManagementExchangeConnectorType} from './deviceManagementExchangeConnectorType';
import {DeviceManagementExchangeConnector} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementExchangeConnector(deviceManagementExchangeConnector: DeviceManagementExchangeConnector | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceManagementExchangeConnector),
        "connectorServerName": n => { deviceManagementExchangeConnector.connectorServerName = n.getStringValue() as any ; },
        "exchangeAlias": n => { deviceManagementExchangeConnector.exchangeAlias = n.getStringValue() as any ; },
        "exchangeConnectorType": n => { deviceManagementExchangeConnector.exchangeConnectorType = n.getEnumValue<DeviceManagementExchangeConnectorType>(DeviceManagementExchangeConnectorType) as any ; },
        "exchangeOrganization": n => { deviceManagementExchangeConnector.exchangeOrganization = n.getStringValue() as any ; },
        "lastSyncDateTime": n => { deviceManagementExchangeConnector.lastSyncDateTime = n.getDateValue() as any ; },
        "primarySmtpAddress": n => { deviceManagementExchangeConnector.primarySmtpAddress = n.getStringValue() as any ; },
        "serverName": n => { deviceManagementExchangeConnector.serverName = n.getStringValue() as any ; },
        "status": n => { deviceManagementExchangeConnector.status = n.getEnumValue<DeviceManagementExchangeConnectorStatus>(DeviceManagementExchangeConnectorStatus) as any ; },
        "version": n => { deviceManagementExchangeConnector.version = n.getStringValue() as any ; },
    }
}
