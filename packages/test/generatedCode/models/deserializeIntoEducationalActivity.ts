import {deserializeIntoEducationalActivityDetail} from './deserializeIntoEducationalActivityDetail';
import {deserializeIntoInstitutionData} from './deserializeIntoInstitutionData';
import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {EducationalActivity} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationalActivity(educationalActivity: EducationalActivity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(educationalActivity),
        "completionMonthYear": n => { educationalActivity.completionMonthYear = n.getDateOnlyValue() as any ; },
        "endMonthYear": n => { educationalActivity.endMonthYear = n.getDateOnlyValue() as any ; },
        "institution": n => { educationalActivity.institution = n.getObject(deserializeIntoInstitutionData) as any ; },
        "program": n => { educationalActivity.program = n.getObject(deserializeIntoEducationalActivityDetail) as any ; },
        "startMonthYear": n => { educationalActivity.startMonthYear = n.getDateOnlyValue() as any ; },
    }
}
