import {BaseCollectionPaginationCountResponse, HomeRealmDiscoveryPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface HomeRealmDiscoveryPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: HomeRealmDiscoveryPolicy[];
}
