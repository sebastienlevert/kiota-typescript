import {BaseCollectionPaginationCountResponse, OnenotePage} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenotePageCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OnenotePage[];
}
