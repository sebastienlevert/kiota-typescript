import {deserializeIntoEducationClass} from './deserializeIntoEducationClass';
import {deserializeIntoEducationSchool} from './deserializeIntoEducationSchool';
import {deserializeIntoEducationUser} from './deserializeIntoEducationUser';
import {EducationRoot} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationRoot(educationRoot: EducationRoot | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "classes": n => { educationRoot.classes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationClass) as any ; },
        "me": n => { educationRoot.me = n.getObject(deserializeIntoEducationUser) as any ; },
        "@odata.type": n => { educationRoot.odataType = n.getStringValue() as any ; },
        "schools": n => { educationRoot.schools = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationSchool) as any ; },
        "users": n => { educationRoot.users = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationUser) as any ; },
    }
}
