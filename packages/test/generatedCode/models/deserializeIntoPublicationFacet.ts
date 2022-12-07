import {PublicationFacet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPublicationFacet(publicationFacet: PublicationFacet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "level": n => { publicationFacet.level = n.getStringValue() as any ; },
        "versionId": n => { publicationFacet.versionId = n.getStringValue() as any ; },
    }
}
