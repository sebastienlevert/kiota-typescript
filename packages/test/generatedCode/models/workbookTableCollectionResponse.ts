import {BaseCollectionPaginationCountResponse, WorkbookTable} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTableCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkbookTable[];
}
