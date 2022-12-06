import {B2xIdentityUserFlow, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface B2xIdentityUserFlowCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: B2xIdentityUserFlow[];
}
