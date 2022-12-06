import {BaseCollectionPaginationCountResponse, SectionGroup} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SectionGroupCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SectionGroup[];
}
