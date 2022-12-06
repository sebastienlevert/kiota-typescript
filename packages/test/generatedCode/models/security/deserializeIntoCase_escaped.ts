import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoIdentitySet} from '../deserializeIntoIdentitySet';
import {CaseStatus} from './caseStatus';
import {Case_escaped} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCase_escaped(case_escaped: Case_escaped | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(case_escaped),
        "createdDateTime": n => { case_escaped.createdDateTime = n.getDateValue() as any ; },
        "description": n => { case_escaped.description = n.getStringValue() as any ; },
        "displayName": n => { case_escaped.displayName = n.getStringValue() as any ; },
        "lastModifiedBy": n => { case_escaped.lastModifiedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "lastModifiedDateTime": n => { case_escaped.lastModifiedDateTime = n.getDateValue() as any ; },
        "status": n => { case_escaped.status = n.getEnumValue<CaseStatus>(CaseStatus) as any ; },
    }
}
