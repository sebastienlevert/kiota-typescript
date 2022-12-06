import {BaseCollectionPaginationCountResponse, StsPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface StsPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: StsPolicy[];
}
