import {deserializeIntoPlannerTeamsPublicationInfo} from './deserializeIntoPlannerTeamsPublicationInfo';
import {PlannerTaskCreation} from './index';
import {PlannerCreationSourceKind} from './plannerCreationSourceKind';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerTaskCreation(plannerTaskCreation: PlannerTaskCreation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "creationSourceKind": n => { plannerTaskCreation.creationSourceKind = n.getEnumValue<PlannerCreationSourceKind>(PlannerCreationSourceKind) as any ; },
        "teamsPublicationInfo": n => { plannerTaskCreation.teamsPublicationInfo = n.getObject(deserializeIntoPlannerTeamsPublicationInfo) as any ; },
    }
}
