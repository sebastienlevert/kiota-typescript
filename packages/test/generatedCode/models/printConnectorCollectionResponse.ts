import {BaseCollectionPaginationCountResponse, PrintConnector} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintConnectorCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PrintConnector[];
}
