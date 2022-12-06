import {BaseCollectionPaginationCountResponse} from '../';
import {ExternalConnection} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalConnectionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ExternalConnection[];
}
