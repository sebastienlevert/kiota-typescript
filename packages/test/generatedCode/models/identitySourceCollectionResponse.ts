import {BaseCollectionPaginationCountResponse, IdentitySource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentitySourceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IdentitySource[];
}
