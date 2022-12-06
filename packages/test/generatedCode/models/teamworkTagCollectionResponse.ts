import {BaseCollectionPaginationCountResponse, TeamworkTag} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkTagCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TeamworkTag[];
}
