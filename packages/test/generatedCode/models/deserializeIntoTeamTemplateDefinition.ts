import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoTeam} from './deserializeIntoTeam';
import {TeamTemplateDefinition} from './index';
import {TeamTemplateAudience} from './teamTemplateAudience';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamTemplateDefinition(teamTemplateDefinition: TeamTemplateDefinition | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamTemplateDefinition),
        "audience": n => { teamTemplateDefinition.audience = n.getEnumValue<TeamTemplateAudience>(TeamTemplateAudience) as any ; },
        "categories": n => { teamTemplateDefinition.categories = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "description": n => { teamTemplateDefinition.description = n.getStringValue() as any ; },
        "displayName": n => { teamTemplateDefinition.displayName = n.getStringValue() as any ; },
        "iconUrl": n => { teamTemplateDefinition.iconUrl = n.getStringValue() as any ; },
        "languageTag": n => { teamTemplateDefinition.languageTag = n.getStringValue() as any ; },
        "lastModifiedBy": n => { teamTemplateDefinition.lastModifiedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "lastModifiedDateTime": n => { teamTemplateDefinition.lastModifiedDateTime = n.getDateValue() as any ; },
        "parentTemplateId": n => { teamTemplateDefinition.parentTemplateId = n.getStringValue() as any ; },
        "publisherName": n => { teamTemplateDefinition.publisherName = n.getStringValue() as any ; },
        "shortDescription": n => { teamTemplateDefinition.shortDescription = n.getStringValue() as any ; },
        "teamDefinition": n => { teamTemplateDefinition.teamDefinition = n.getObject(deserializeIntoTeam) as any ; },
    }
}
