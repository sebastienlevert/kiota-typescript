import {deserializeIntoLocationConstraintItem} from './deserializeIntoLocationConstraintItem';
import {LocationConstraint} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocationConstraint(locationConstraint: LocationConstraint | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isRequired": n => { locationConstraint.isRequired = n.getBooleanValue() as any ; },
        "locations": n => { locationConstraint.locations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocationConstraintItem) as any ; },
        "@odata.type": n => { locationConstraint.odataType = n.getStringValue() as any ; },
        "suggestLocation": n => { locationConstraint.suggestLocation = n.getBooleanValue() as any ; },
    }
}
