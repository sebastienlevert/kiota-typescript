import {BaseCollectionPaginationCountResponse, IdentityCustomUserFlowAttribute} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityCustomUserFlowAttributeCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IdentityCustomUserFlowAttribute[];
}
