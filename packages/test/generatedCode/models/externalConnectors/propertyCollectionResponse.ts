import {BaseCollectionPaginationCountResponse} from '../';
import {Property} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PropertyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Property[];
}
