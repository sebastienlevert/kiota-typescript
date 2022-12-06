import {BaseCollectionPaginationCountResponse, IosVppEBook} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosVppEBookCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosVppEBook[];
}
