import {BaseCollectionPaginationCountResponse, IosNetworkUsageRule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosNetworkUsageRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosNetworkUsageRule[];
}
