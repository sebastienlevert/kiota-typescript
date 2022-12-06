import {BaseCollectionPaginationCountResponse} from '../';
import {Session} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SessionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Session[];
}
