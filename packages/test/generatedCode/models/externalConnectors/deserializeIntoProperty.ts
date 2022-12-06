import {Property} from './index';
import {Label} from './label';
import {PropertyType} from './propertyType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProperty(property: Property | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "aliases": n => { property.aliases = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "isQueryable": n => { property.isQueryable = n.getBooleanValue() as any ; },
        "isRefinable": n => { property.isRefinable = n.getBooleanValue() as any ; },
        "isRetrievable": n => { property.isRetrievable = n.getBooleanValue() as any ; },
        "isSearchable": n => { property.isSearchable = n.getBooleanValue() as any ; },
        "labels": n => { property.labels = n.getEnumValues<Label>(Label) as any ; },
        "name": n => { property.name = n.getStringValue() as any ; },
        "@odata.type": n => { property.odataType = n.getStringValue() as any ; },
        "type": n => { property.type = n.getEnumValue<PropertyType>(PropertyType) as any ; },
    }
}
