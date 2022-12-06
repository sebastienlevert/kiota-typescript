import {BaseCollectionPaginationCountResponse, IdentityUserFlowAttribute} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityUserFlowAttributeCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IdentityUserFlowAttribute[];
}
