import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {PersonCertification} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonCertification(personCertification: PersonCertification | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(personCertification),
        "certificationId": n => { personCertification.certificationId = n.getStringValue() as any ; },
        "description": n => { personCertification.description = n.getStringValue() as any ; },
        "displayName": n => { personCertification.displayName = n.getStringValue() as any ; },
        "endDate": n => { personCertification.endDate = n.getDateOnlyValue() as any ; },
        "issuedDate": n => { personCertification.issuedDate = n.getDateOnlyValue() as any ; },
        "issuingAuthority": n => { personCertification.issuingAuthority = n.getStringValue() as any ; },
        "issuingCompany": n => { personCertification.issuingCompany = n.getStringValue() as any ; },
        "startDate": n => { personCertification.startDate = n.getDateOnlyValue() as any ; },
        "thumbnailUrl": n => { personCertification.thumbnailUrl = n.getStringValue() as any ; },
        "webUrl": n => { personCertification.webUrl = n.getStringValue() as any ; },
    }
}
