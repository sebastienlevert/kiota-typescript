import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoPublicationFacet} from './deserializeIntoPublicationFacet';
import {BaseItemVersion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBaseItemVersion(baseItemVersion: BaseItemVersion | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(baseItemVersion),
        "lastModifiedBy": n => { baseItemVersion.lastModifiedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "lastModifiedDateTime": n => { baseItemVersion.lastModifiedDateTime = n.getDateValue() as any ; },
        "publication": n => { baseItemVersion.publication = n.getObject(deserializeIntoPublicationFacet) as any ; },
    }
}
