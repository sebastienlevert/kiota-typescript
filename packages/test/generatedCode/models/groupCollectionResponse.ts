import {BaseCollectionPaginationCountResponse, Group} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Group[];
}
