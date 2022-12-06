import {BaseCollectionPaginationCountResponse, IosHomeScreenPage} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosHomeScreenPageCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosHomeScreenPage[];
}
