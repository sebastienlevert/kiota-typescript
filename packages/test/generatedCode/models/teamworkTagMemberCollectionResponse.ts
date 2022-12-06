import {BaseCollectionPaginationCountResponse, TeamworkTagMember} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkTagMemberCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TeamworkTagMember[];
}
