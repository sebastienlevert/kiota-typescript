import {BaseCollectionPaginationCountResponse, Team} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Team[];
}
