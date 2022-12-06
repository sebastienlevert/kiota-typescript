import {BaseCollectionPaginationCountResponse, DeviceManagementExchangeConnector} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementExchangeConnectorCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceManagementExchangeConnector[];
}
