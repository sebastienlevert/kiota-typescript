import {LocationConstraint} from './index';
import {serializeLocationConstraintItem} from './serializeLocationConstraintItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocationConstraint(writer: SerializationWriter, locationConstraint: LocationConstraint | undefined = {}) : void {
            writer.writeBooleanValue("isRequired", locationConstraint.isRequired);
            writer.writeCollectionOfObjectValuesFromMethod("locations", locationConstraint.locations as any, serializeLocationConstraintItem);
            writer.writeStringValue("@odata.type", locationConstraint.odataType);
            writer.writeBooleanValue("suggestLocation", locationConstraint.suggestLocation);
}
