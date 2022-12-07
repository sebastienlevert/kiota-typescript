import {EducationalActivity} from './index';
import {serializeEducationalActivityDetail} from './serializeEducationalActivityDetail';
import {serializeInstitutionData} from './serializeInstitutionData';
import {serializeItemFacet} from './serializeItemFacet';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationalActivity(writer: SerializationWriter, educationalActivity: EducationalActivity | undefined = {}) : void {
        serializeItemFacet(writer, educationalActivity)
            writer.writeDateOnlyValue("completionMonthYear", educationalActivity.completionMonthYear);
            writer.writeDateOnlyValue("endMonthYear", educationalActivity.endMonthYear);
            writer.writeObjectValueFromMethod("institution", educationalActivity.institution as any, serializeInstitutionData);
            writer.writeObjectValueFromMethod("program", educationalActivity.program as any, serializeEducationalActivityDetail);
            writer.writeDateOnlyValue("startMonthYear", educationalActivity.startMonthYear);
}
