import {AllowedAudiences} from './allowedAudiences';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoInferenceData} from './deserializeIntoInferenceData';
import {deserializeIntoPersonDataSources} from './deserializeIntoPersonDataSources';
import {ItemFacet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemFacet(itemFacet: ItemFacet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(itemFacet),
        "allowedAudiences": n => { itemFacet.allowedAudiences = n.getEnumValue<AllowedAudiences>(AllowedAudiences) as any ; },
        "createdBy": n => { itemFacet.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { itemFacet.createdDateTime = n.getDateValue() as any ; },
        "inference": n => { itemFacet.inference = n.getObject(deserializeIntoInferenceData) as any ; },
        "isSearchable": n => { itemFacet.isSearchable = n.getBooleanValue() as any ; },
        "lastModifiedBy": n => { itemFacet.lastModifiedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "lastModifiedDateTime": n => { itemFacet.lastModifiedDateTime = n.getDateValue() as any ; },
        "source": n => { itemFacet.source = n.getObject(deserializeIntoPersonDataSources) as any ; },
    }
}
