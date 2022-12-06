import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationCategory} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationCategory(educationCategory: EducationCategory | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationCategory),
        "displayName": n => { educationCategory.displayName = n.getStringValue() as any ; },
    }
}
