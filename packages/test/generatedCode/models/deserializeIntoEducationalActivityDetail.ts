import {EducationalActivityDetail} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationalActivityDetail(educationalActivityDetail: EducationalActivityDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "abbreviation": n => { educationalActivityDetail.abbreviation = n.getStringValue() as any ; },
        "activities": n => { educationalActivityDetail.activities = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "awards": n => { educationalActivityDetail.awards = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "description": n => { educationalActivityDetail.description = n.getStringValue() as any ; },
        "displayName": n => { educationalActivityDetail.displayName = n.getStringValue() as any ; },
        "fieldsOfStudy": n => { educationalActivityDetail.fieldsOfStudy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "grade": n => { educationalActivityDetail.grade = n.getStringValue() as any ; },
        "notes": n => { educationalActivityDetail.notes = n.getStringValue() as any ; },
        "webUrl": n => { educationalActivityDetail.webUrl = n.getStringValue() as any ; },
    }
}
