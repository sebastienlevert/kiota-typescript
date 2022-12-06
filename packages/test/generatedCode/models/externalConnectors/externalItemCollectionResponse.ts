import {BaseCollectionPaginationCountResponse} from '../';
import {ExternalItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ExternalItem[];
}
