import {BaseCollectionPaginationCountResponse, PolicyBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PolicyBaseCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PolicyBase[];
}
