import {BaseCollectionPaginationCountResponse, SharedWithChannelTeamInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedWithChannelTeamInfoCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SharedWithChannelTeamInfo[];
}
