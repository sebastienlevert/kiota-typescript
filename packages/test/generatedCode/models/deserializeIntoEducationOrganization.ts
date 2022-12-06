import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationExternalSource} from './educationExternalSource';
import {EducationOrganization} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationOrganization(educationOrganization: EducationOrganization | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationOrganization),
        "description": n => { educationOrganization.description = n.getStringValue() as any ; },
        "displayName": n => { educationOrganization.displayName = n.getStringValue() as any ; },
        "externalSource": n => { educationOrganization.externalSource = n.getEnumValue<EducationExternalSource>(EducationExternalSource) as any ; },
        "externalSourceDetail": n => { educationOrganization.externalSourceDetail = n.getStringValue() as any ; },
    }
}
