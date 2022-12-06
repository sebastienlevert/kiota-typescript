import {BaseCollectionPaginationCountResponse, Process} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProcessCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Process[];
}
