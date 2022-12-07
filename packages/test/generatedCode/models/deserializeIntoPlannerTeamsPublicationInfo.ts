import {deserializeIntoPlannerTaskCreation} from './deserializeIntoPlannerTaskCreation';
import {PlannerTeamsPublicationInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerTeamsPublicationInfo(plannerTeamsPublicationInfo: PlannerTeamsPublicationInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPlannerTaskCreation(plannerTeamsPublicationInfo),
        "lastModifiedDateTime": n => { plannerTeamsPublicationInfo.lastModifiedDateTime = n.getDateValue() as any ; },
        "publicationId": n => { plannerTeamsPublicationInfo.publicationId = n.getStringValue() as any ; },
        "publishedToPlanId": n => { plannerTeamsPublicationInfo.publishedToPlanId = n.getStringValue() as any ; },
        "publishingTeamId": n => { plannerTeamsPublicationInfo.publishingTeamId = n.getStringValue() as any ; },
        "publishingTeamName": n => { plannerTeamsPublicationInfo.publishingTeamName = n.getStringValue() as any ; },
    }
}
