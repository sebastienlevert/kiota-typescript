import {BaseCollectionPaginationCountResponse, IdentityBuiltInUserFlowAttribute} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityBuiltInUserFlowAttributeCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IdentityBuiltInUserFlowAttribute[];
}
