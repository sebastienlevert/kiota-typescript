import {deserializeIntoCategory} from './deserializeIntoCategory';
import {deserializeIntoTag} from './deserializeIntoTag';
import {Pet} from './index';
import {Pet_status} from './pet_status';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPet(pet: Pet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "category": n => { pet.category = n.getObject(deserializeIntoCategory) as any ; },
        "id": n => { pet.id = n.getNumberValue() as any ; },
        "name": n => { pet.name = n.getStringValue() as any ; },
        "photoUrls": n => { pet.photoUrls = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "status": n => { pet.status = n.getEnumValue<Pet_status>(Pet_status) as any ; },
        "tags": n => { pet.tags = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTag) as any ; },
    }
}
