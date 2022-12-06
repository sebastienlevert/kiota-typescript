import {BaseCollectionPaginationCountResponse, OnenoteSection} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteSectionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OnenoteSection[];
}
