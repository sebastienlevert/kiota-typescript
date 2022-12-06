import {BaseCollectionPaginationCountResponse, MobileThreatDefenseConnector} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileThreatDefenseConnectorCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MobileThreatDefenseConnector[];
}
