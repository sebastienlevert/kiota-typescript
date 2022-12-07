import {Pet} from './index';
import {Pet_status} from './pet_status';
import {serializeCategory} from './serializeCategory';
import {serializeTag} from './serializeTag';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePet(writer: SerializationWriter, pet: Pet | undefined = {}) : void {
            writer.writeObjectValueFromMethod("category", pet.category as any, serializeCategory);
            writer.writeNumberValue("id", pet.id);
            writer.writeStringValue("name", pet.name);
            writer.writeCollectionOfPrimitiveValues<string>("photoUrls", pet.photoUrls);
            writer.writeEnumValue<Pet_status>("status", pet.status);
            writer.writeCollectionOfObjectValuesFromMethod("tags", pet.tags as any, serializeTag);
}
