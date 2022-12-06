import {AccessPackageSubjectType} from './accessPackageSubjectType';
import {deserializeIntoConnectedOrganization} from './deserializeIntoConnectedOrganization';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AccessPackageSubject} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageSubject(accessPackageSubject: AccessPackageSubject | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageSubject),
        "connectedOrganization": n => { accessPackageSubject.connectedOrganization = n.getObject(deserializeIntoConnectedOrganization) as any ; },
        "displayName": n => { accessPackageSubject.displayName = n.getStringValue() as any ; },
        "email": n => { accessPackageSubject.email = n.getStringValue() as any ; },
        "objectId": n => { accessPackageSubject.objectId = n.getStringValue() as any ; },
        "onPremisesSecurityIdentifier": n => { accessPackageSubject.onPremisesSecurityIdentifier = n.getStringValue() as any ; },
        "principalName": n => { accessPackageSubject.principalName = n.getStringValue() as any ; },
        "subjectType": n => { accessPackageSubject.subjectType = n.getEnumValue<AccessPackageSubjectType>(AccessPackageSubjectType) as any ; },
    }
}
