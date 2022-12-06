import {DeviceManagementExchangeConnectorStatus} from './deviceManagementExchangeConnectorStatus';
import {DeviceManagementExchangeConnectorType} from './deviceManagementExchangeConnectorType';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementExchangeConnector extends Entity, Partial<Parsable> {
    /** The name of the server hosting the Exchange Connector. */
    connectorServerName?: string;
    /** An alias assigned to the Exchange server */
    exchangeAlias?: string;
    /** The type of Exchange Connector. */
    exchangeConnectorType?: DeviceManagementExchangeConnectorType;
    /** Exchange Organization to the Exchange server */
    exchangeOrganization?: string;
    /** Last sync time for the Exchange Connector */
    lastSyncDateTime?: Date;
    /** Email address used to configure the Service To Service Exchange Connector. */
    primarySmtpAddress?: string;
    /** The name of the Exchange server. */
    serverName?: string;
    /** The current status of the Exchange Connector. */
    status?: DeviceManagementExchangeConnectorStatus;
    /** The version of the ExchangeConnectorAgent */
    version?: string;
}
