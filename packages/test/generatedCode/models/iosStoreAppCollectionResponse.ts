import {BaseCollectionPaginationCountResponse, IosStoreApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosStoreAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosStoreApp[];
}
