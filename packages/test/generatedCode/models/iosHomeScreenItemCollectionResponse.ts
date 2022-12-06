import {BaseCollectionPaginationCountResponse, IosHomeScreenItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosHomeScreenItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosHomeScreenItem[];
}
