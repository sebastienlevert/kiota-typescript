import {BaseCollectionPaginationCountResponse, Call} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CallCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Call[];
}
