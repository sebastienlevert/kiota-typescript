import {BaseCollectionPaginationCountResponse, Extension} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExtensionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Extension[];
}
