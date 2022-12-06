import {EducationRoot} from './index';
import {serializeEducationClass} from './serializeEducationClass';
import {serializeEducationSchool} from './serializeEducationSchool';
import {serializeEducationUser} from './serializeEducationUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationRoot(writer: SerializationWriter, educationRoot: EducationRoot | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("classes", educationRoot.classes as any, serializeEducationClass);
            writer.writeObjectValueFromMethod("me", educationRoot.me as any, serializeEducationUser);
            writer.writeStringValue("@odata.type", educationRoot.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("schools", educationRoot.schools as any, serializeEducationSchool);
            writer.writeCollectionOfObjectValuesFromMethod("users", educationRoot.users as any, serializeEducationUser);
}
