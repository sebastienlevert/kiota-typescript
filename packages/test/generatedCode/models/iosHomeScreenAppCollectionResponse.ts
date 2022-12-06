import {BaseCollectionPaginationCountResponse, IosHomeScreenApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosHomeScreenAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosHomeScreenApp[];
}
