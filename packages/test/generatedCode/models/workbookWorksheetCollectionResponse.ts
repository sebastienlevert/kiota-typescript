import {BaseCollectionPaginationCountResponse, WorkbookWorksheet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookWorksheetCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkbookWorksheet[];
}
