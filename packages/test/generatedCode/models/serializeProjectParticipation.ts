import {ProjectParticipation} from './index';
import {serializeCompanyDetail} from './serializeCompanyDetail';
import {serializeItemFacet} from './serializeItemFacet';
import {serializePositionDetail} from './serializePositionDetail';
import {serializeRelatedPerson} from './serializeRelatedPerson';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProjectParticipation(writer: SerializationWriter, projectParticipation: ProjectParticipation | undefined = {}) : void {
        serializeItemFacet(writer, projectParticipation)
            writer.writeCollectionOfPrimitiveValues<string>("categories", projectParticipation.categories);
            writer.writeObjectValueFromMethod("client", projectParticipation.client as any, serializeCompanyDetail);
            writer.writeCollectionOfPrimitiveValues<string>("collaborationTags", projectParticipation.collaborationTags);
            writer.writeCollectionOfObjectValuesFromMethod("colleagues", projectParticipation.colleagues as any, serializeRelatedPerson);
            writer.writeObjectValueFromMethod("detail", projectParticipation.detail as any, serializePositionDetail);
            writer.writeStringValue("displayName", projectParticipation.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("sponsors", projectParticipation.sponsors as any, serializeRelatedPerson);
            writer.writeStringValue("thumbnailUrl", projectParticipation.thumbnailUrl);
}
