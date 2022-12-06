import {Entity, TeamworkTagMember} from './index';
import {TeamworkTagType} from './teamworkTagType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkTag extends Entity, Partial<Parsable> {
    /** The description of the tag as it will appear to the user in Microsoft Teams. */
    description?: string;
    /** The name of the tag as it will appear to the user in Microsoft Teams. */
    displayName?: string;
    /** The number of users assigned to the tag. */
    memberCount?: number;
    /** Users assigned to the tag. */
    members?: TeamworkTagMember[];
    /** The type of the tag. Default is standard. */
    tagType?: TeamworkTagType;
    /** ID of the team in which the tag is defined. */
    teamId?: string;
}
