import {PlannerTaskCreation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerTeamsPublicationInfo extends Partial<Parsable>, PlannerTaskCreation {
    /** The date and time when this task was last modified by the publication process. Read-only. */
    lastModifiedDateTime?: Date;
    /** The identifier of the publication. Read-only. */
    publicationId?: string;
    /** The identifier of the plannerPlan this task was originally placed in. Read-only. */
    publishedToPlanId?: string;
    /** The identifier of the team that initiated the publication process. Read-only. */
    publishingTeamId?: string;
    /** The display name of the team that initiated the publication process. This display name is for reference only, and might not represent the most up-to-date name of the team. Read-only. */
    publishingTeamName?: string;
}
