import {AccessPackageSubjectType} from './accessPackageSubjectType';
import {AccessPackageSubject} from './index';
import {serializeConnectedOrganization} from './serializeConnectedOrganization';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageSubject(writer: SerializationWriter, accessPackageSubject: AccessPackageSubject | undefined = {}) : void {
        serializeEntity(writer, accessPackageSubject)
            writer.writeObjectValueFromMethod("connectedOrganization", accessPackageSubject.connectedOrganization as any, serializeConnectedOrganization);
            writer.writeStringValue("displayName", accessPackageSubject.displayName);
            writer.writeStringValue("email", accessPackageSubject.email);
            writer.writeStringValue("objectId", accessPackageSubject.objectId);
            writer.writeStringValue("onPremisesSecurityIdentifier", accessPackageSubject.onPremisesSecurityIdentifier);
            writer.writeStringValue("principalName", accessPackageSubject.principalName);
            writer.writeEnumValue<AccessPackageSubjectType>("subjectType", accessPackageSubject.subjectType);
}
