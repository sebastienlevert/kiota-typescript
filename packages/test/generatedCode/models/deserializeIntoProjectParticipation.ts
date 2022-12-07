import {deserializeIntoCompanyDetail} from './deserializeIntoCompanyDetail';
import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {deserializeIntoPositionDetail} from './deserializeIntoPositionDetail';
import {deserializeIntoRelatedPerson} from './deserializeIntoRelatedPerson';
import {ProjectParticipation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProjectParticipation(projectParticipation: ProjectParticipation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(projectParticipation),
        "categories": n => { projectParticipation.categories = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "client": n => { projectParticipation.client = n.getObject(deserializeIntoCompanyDetail) as any ; },
        "collaborationTags": n => { projectParticipation.collaborationTags = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "colleagues": n => { projectParticipation.colleagues = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRelatedPerson) as any ; },
        "detail": n => { projectParticipation.detail = n.getObject(deserializeIntoPositionDetail) as any ; },
        "displayName": n => { projectParticipation.displayName = n.getStringValue() as any ; },
        "sponsors": n => { projectParticipation.sponsors = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRelatedPerson) as any ; },
        "thumbnailUrl": n => { projectParticipation.thumbnailUrl = n.getStringValue() as any ; },
    }
}
