import {PlannerTeamsPublicationInfo} from './index';
import {serializePlannerTaskCreation} from './serializePlannerTaskCreation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerTeamsPublicationInfo(writer: SerializationWriter, plannerTeamsPublicationInfo: PlannerTeamsPublicationInfo | undefined = {}) : void {
        serializePlannerTaskCreation(writer, plannerTeamsPublicationInfo)
            writer.writeDateValue("lastModifiedDateTime", plannerTeamsPublicationInfo.lastModifiedDateTime);
            writer.writeStringValue("publicationId", plannerTeamsPublicationInfo.publicationId);
            writer.writeStringValue("publishedToPlanId", plannerTeamsPublicationInfo.publishedToPlanId);
            writer.writeStringValue("publishingTeamId", plannerTeamsPublicationInfo.publishingTeamId);
            writer.writeStringValue("publishingTeamName", plannerTeamsPublicationInfo.publishingTeamName);
}
