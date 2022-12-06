import {BaseCollectionPaginationCountResponse, IdentityApiConnector} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityApiConnectorCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IdentityApiConnector[];
}
